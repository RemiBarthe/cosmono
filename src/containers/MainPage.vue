<template>
  <div>
    <Header />
    <TeamOverview />
    <ListProjectDone />
    <ListCurrentProject />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import TeamOverview from "../components/TeamOverview.vue";
import ListProjectDone from "../components/ListProjectDone.vue";
import ListCurrentProject from "../components/ListCurrentProject.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    TeamOverview,
    ListProjectDone,
    ListCurrentProject,
    Contact,
    Footer
  }
};
</script>