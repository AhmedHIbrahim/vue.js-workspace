<template>
  <div>
    <base-card>
      <base-button
        @click="setSelectedTab('stored-resources')"
        :mode="storedResButtonMode"
        >Stored Resources</base-button
      >
      <base-button
        @click="setSelectedTab('add-resource')"
        :mode="addResButtonMode"
        >Add Resource</base-button
      >
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "...",
          link: "vuejs.org",
        },
        {
          id: "Google",
          title: "google Guide",
          description: "...",
          link: "google.org",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab == "stored-resources" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab == "add-resource" ? null : "flat";
    },
  },
  methods: {
    setSelectedTab(tabId) {
      this.selectedTab = tabId;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = "stored-resources";
    },
    deleteResource(id) {
      const resIdx = this.storedResources.findIndex((res) => res.id === id);
      this.storedResources.splice(resIdx, 1);
    },
  },
};
</script>

<style></style>
