<template>
  <v-card class="document-explorer">
    <v-card-title class="d-flex align-center flex-wrap">
      Document Explorer
      <v-spacer />

      <!-- Search field -->
      <v-text-field v-model="searchQuery" append-icon="mdi-magnify" label="Search files" single-line hide-details dense
        class="mx-4" style="max-width: 300px" />

      <!-- View toggle -->
      <v-btn-toggle v-model="viewMode" mandatory dense>
        <v-btn value="list">
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
        <v-btn value="grid">
          <v-icon>mdi-view-grid</v-icon>
        </v-btn>
      </v-btn-toggle>

      <!-- Sort menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon class="ml-2" v-bind="attrs" v-on="on">
            <v-icon>mdi-sort</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="sort in sortOptions" :key="sort.value" @click="sortBy = sort.value">
            <v-list-item-title>
              {{ sort.text }}
              <v-icon v-if="sortBy === sort.value" small class="ml-2">
                mdi-check
              </v-icon>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-title>

    <v-card-text>
      <!-- Breadcrumb navigation -->
      <v-breadcrumbs :items="breadcrumbItems">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item :text="item.text" @click="navigateTo(item.path)" :class="{ 'primary--text': true }" />
        </template>
      </v-breadcrumbs>

      <!-- List View -->
      <v-list v-if="viewMode === 'list'">
        <!-- Folders -->
        <v-list-item v-for="folder in sortedContent.folders" :key="folder.path" @click="openFolder(folder.path)"
          class="rounded-lg mb-2">
          <v-list-item-icon>
            <v-icon color="amber">mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ folder.name }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-action>
        </v-list-item>

        <!-- Files -->
        <v-list-item v-for="file in sortedContent.files" :key="file.path" class="rounded-lg mb-2"
          @click="previewFile(file)">
          <v-list-item-icon>
            <v-icon :color="getFileIconColor(file.name)">
              {{ getFileIcon(file.name) }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ file.name }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ getFileType(file.name) }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn color="primary" text :href="file.path" download @click.stop>
              <v-icon left>mdi-download</v-icon>
              Download
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <!-- Grid View -->
      <v-container v-else>
        <v-row>
          <!-- Folders -->
          <v-col v-for="folder in sortedContent.folders" :key="folder.path" cols="12" sm="6" md="4" lg="3">
            <v-card outlined hover @click="openFolder(folder.path)" class="mx-auto">
              <v-card-text class="text-center">
                <v-icon size="64" color="amber">mdi-folder</v-icon>
                <div class="text-truncate mt-2">{{ folder.name }}</div>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Files -->
          <v-col v-for="file in sortedContent.files" :key="file.path" cols="12" sm="6" md="4" lg="3">
            <v-card outlined hover class="mx-auto">
              <v-card-text class="text-center">
                <v-icon size="64" :color="getFileIconColor(file.name)" @click="previewFile(file)">
                  {{ getFileIcon(file.name) }}
                </v-icon>
                <div class="text-truncate mt-2">{{ file.name }}</div>
                <v-btn text small color="primary" :href="file.path" download class="mt-2" @click.stop>
                  <v-icon left small>mdi-download</v-icon>
                  Download
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Empty state -->
      <v-container v-if="isEmpty" class="text-center py-8">
        <v-icon size="64" color="grey lighten-1">mdi-folder-open</v-icon>
        <div class="text-h6 grey--text text--darken-1 mt-4">
          {{ searchQuery ? 'No matching files found' : 'This folder is empty' }}
        </div>
      </v-container>
    </v-card-text>

    <!-- Preview Dialog -->
    <v-dialog v-model="previewDialog" max-width="80vw" max-height="90vh">
      <v-card>
        <v-card-title class="headline">
          {{ selectedFile?.name }}
          <v-spacer />
          <v-btn icon @click="previewDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <div class="preview-container">
            <!-- PDF Preview -->
            <iframe v-if="isPreviewablePDF" :src="selectedFile?.path" width="100%" height="600" frameborder="0" />

            <!-- Image Preview -->
            <v-img v-else-if="isPreviewableImage" :src="selectedFile?.path" contain max-height="600" />

            <!-- Text Preview -->
            <v-sheet v-else-if="isPreviewableText" class="pa-4" max-height="600" overflow-y="auto">
              <pre>{{ fileContent }}</pre>
            </v-sheet>

            <!-- No Preview Available -->
            <div v-else class="text-center pa-4">
              <v-icon size="64" color="grey lighten-1">mdi-file-eye</v-icon>
              <div class="text-h6 grey--text text--darken-1 mt-4">
                Preview not available for this file type
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>

// fileStructure.js
export const fileStructure = {
  folders: [
    {
      name: 'Documents',
      path: '/documents',
      folders: [
        {
          name: 'Reports',
          path: '/documents/reports',
          folders: [],
          files: [
            { name: 'Report-2024.pdf', path: '/documents/reports/report-2024.pdf' }
          ]
        }
      ],
      files: [
        { name: 'Guide.pdf', path: '/documents/guide.pdf' },
        { name: 'README.txt', path: '/documents/readme.txt' }
      ]
    }
  ],
  
}

export default {
  name: 'DocumentExplorer',

  props: {
    fileStructure: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: '/documents'
    }
  },

  data() {
    return {
      currentPath: '/',
      searchQuery: '',
      viewMode: 'list',
      sortBy: 'name',
      previewDialog: false,
      selectedFile: null,
      fileContent: null,
      fileIcons: {
        pdf: { icon: 'mdi-file-pdf-box', color: 'red' },
        doc: { icon: 'mdi-file-word', color: 'blue' },
        docx: { icon: 'mdi-file-word', color: 'blue' },
        xls: { icon: 'mdi-file-excel', color: 'green' },
        xlsx: { icon: 'mdi-file-excel', color: 'green' },
        ppt: { icon: 'mdi-file-powerpoint', color: 'orange' },
        pptx: { icon: 'mdi-file-powerpoint', color: 'orange' },
        txt: { icon: 'mdi-file-document-outline', color: 'grey' },
        jpg: { icon: 'mdi-file-image', color: 'purple' },
        jpeg: { icon: 'mdi-file-image', color: 'purple' },
        png: { icon: 'mdi-file-image', color: 'purple' },
        zip: { icon: 'mdi-folder-zip', color: 'brown' },
        default: { icon: 'mdi-file-outline', color: 'grey' }
      },
      sortOptions: [
        { text: 'Name (A to Z)', value: 'name' },
        { text: 'Name (Z to A)', value: 'name-desc' },
        { text: 'Type', value: 'type' },
        { text: 'Date Modified', value: 'date' }
      ]
    }
  },

  computed: {
    breadcrumbItems() {
      const paths = this.currentPath.split('/').filter(p => p)
      return [
        {
          text: 'Home',
          path: '/',
          disabled: this.currentPath === '/'
        },
        ...paths.map((path, index) => {
          const fullPath = '/' + paths.slice(0, index + 1).join('/')
          return {
            text: path,
            path: fullPath,
            disabled: fullPath === this.currentPath
          }
        })
      ]
    },

    currentContent() {
      let current = this.fileStructure;
      const paths = this.currentPath.split('/').filter(p => p);

      for (const p of paths) {
        const folder = current.folders.find(f => f.name.toLowerCase() === p.toLowerCase());
        if (folder) {
          current = folder;
        } else {
          return { folders: [], files: [] }; // Return empty if folder not found
        }
      }
      return current; // Should always return an object with folders and files
    },

    filteredContent() {
      if (!this.searchQuery) return this.currentContent

      const query = this.searchQuery.toLowerCase()
      return {
        folders: this.currentContent.folders.filter(folder =>
          folder.name.toLowerCase().includes(query)
        ),
        files: this.currentContent.files.filter(file =>
          file.name.toLowerCase().includes(query)
        )
      }
    },

    sortedContent() {
      const content = {
        /* folders: [...(this.filteredContent.folders || [])],
        files: [...(this.filteredContent.files || [])] */
        folders: [],
        files: []
      };

      const sortFn = (a, b) => {
        switch (this.sortBy) {
          case 'name':
            return a.name.localeCompare(b.name);
          case 'name-desc':
            return b.name.localeCompare(a.name);
          case 'type':
            return this.getFileExtension(a.name).localeCompare(this.getFileExtension(b.name));
          case 'date':
            return 0; // Implement date sorting if needed
          default:
            return 0;
        }
      };

      content.folders.sort(sortFn);
      content.files.sort(sortFn);

      return content;
    },

    isEmpty() {
      return (
        (this.sortedContent.folders || []).length === 0 &&
        (this.sortedContent.files || []).length === 0
      );
    },
    isPreviewablePDF() {
      return this.selectedFile &&
        this.getFileExtension(this.selectedFile.name) === 'pdf'
    },

    isPreviewableImage() {
      const ext = this.selectedFile && this.getFileExtension(this.selectedFile.name)
      return ['jpg', 'jpeg', 'png', 'gif'].includes(ext)
    },

    isPreviewableText() {
      const ext = this.selectedFile && this.getFileExtension(this.selectedFile.name)
      return ['txt', 'md', 'json', 'csv'].includes(ext)
    }
  },

  methods: {
    openFolder(path) {
      this.currentPath = path
      this.searchQuery = ''
    },

    navigateTo(path) {
      this.currentPath = path
      this.searchQuery = ''
    },

    getFileExtension(filename) {
      return filename.split('.').pop().toLowerCase()
    },

    getFileIcon(filename) {
      const ext = this.getFileExtension(filename)
      return (this.fileIcons[ext] || this.fileIcons.default).icon
    },

    getFileIconColor(filename) {
      const ext = this.getFileExtension(filename)
      return (this.fileIcons[ext] || this.fileIcons.default).color
    },

    getFileType(filename) {
      const ext = this.getFileExtension(filename)
      return ext.toUpperCase() + ' File'
    },

    async previewFile(file) {
      this.selectedFile = file
      this.fileContent = null
      this.previewDialog = true

      if (this.isPreviewableText) {
        try {
          const response = await fetch(file.path)
          this.fileContent = await response.text()
        } catch (error) {
          console.error('Error loading file content:', error)
          this.fileContent = 'Error loading file content'
        }
      }
    }
  }
}
</script>

<style scoped>
.document-explorer {
  max-width: 1200px;
  margin: auto;
}

.preview-container {
  min-height: 200px;
  max-height: 600px;
  overflow-y: auto;
}

.v-list-item {
  border: 1px solid transparent;
  transition: all 0.2s ease;
}

.v-list-item:hover {
  border-color: var(--v-primary-base);
  background-color: var(--v-primary-lighten-4) !important;
}

.preview-container {
  min-height: 200px;
  max-height: 600px;
  overflow-y: auto;
}

.preview-container pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  margin: 0;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

/* Grid view card styles */
.v-card.outlined {
  transition: all 0.2s ease;
  cursor: pointer;
}

.v-card.outlined:hover {
  border-color: var(--v-primary-base) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Text truncation for long filenames */
.text-truncate {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .v-card-title {
    flex-direction: column;
  }

  .v-text-field {
    margin: 12px 0;
    max-width: 100% !important;
  }

  .v-btn-toggle {
    margin-top: 12px;
  }
}

/* Animation for preview dialog */
.v-dialog-transition-enter-active,
.v-dialog-transition-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.v-dialog-transition-enter,
.v-dialog-transition-leave-to {
  opacity: 0;
}

/* Custom scrollbar for preview container */
.preview-container::-webkit-scrollbar {
  width: 8px;
}

.preview-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.preview-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.preview-container::-webkit-scrollbar-thumb:hover {
  background: #666;
}
</style>