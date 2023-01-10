<template>
  <img
    :src="imageLink"
    class="mr-5 h-14 w-14 rounded-3xl object-contain"
    name="user profile image"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png",
    };
  },
};
</script>
