<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-4"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex h-full items-center text-3xl tracking-tighter text-hooli-blue"
        >
          <font-awesome-icon
            :icon="['fab', 'fa-hooli']"
            class="mr-2 text-8xl text-hooli-blue"
          />
          Careers
        </router-link>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="navItem in navItems"
              :key="navItem.text"
              class="ml-9 h-full first:ml-0"
            >
              <router-link
                :to="navItem.url"
                class="flex h-full items-center py-2.5"
              >
                {{ navItem.text }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" @click="toggleLogin" />
          <action-button v-else text="Sign In" @click="toggleLogin" />
        </div>
      </div>
      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import TheSubnav from "@/components/Navigation/TheSubnav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav,
  },
  data() {
    return {
      navItems: [
        { text: "Teams", url: "/" },
        { text: "Locations", url: "/" },
        { text: "Life at Hooli", url: "/" },
        { text: "How We Hire", url: "/" },
        { text: "Students", url: "/" },
        { text: "Jobs", url: "/jobs/results" },
      ],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    toggleLogin() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
};
</script>
