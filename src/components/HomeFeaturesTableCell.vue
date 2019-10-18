<template>
  <td
    v-if="value === 'y'"
    class="features-table__cell features-table__cell--feature features-table__cell--yes"
    :class="wulkanowy ? 'features-table__cell--wulkanowy' : ''"
    title="Dostępne"
  >
    <check-icon
      title="Dostępne"
      :size="wulkanowy ? 36 : 28"
      fillColor="#4caf50"
    />
  </td>
  <td
    v-else-if="value === 'n'"
    class="features-table__cell features-table__cell--feature features-table__cell--no"
    :class="wulkanowy ? 'features-table__cell--wulkanowy' : ''"
    title="Niedostępne"
  >
    <close-icon
      title="Niedostępne"
      :size="28"
      fillColor="#e53935"
    />
  </td>
  <td
    v-else-if="value === 'w'"
    class="features-table__cell features-table__cell--feature features-table__cell--work-in-progress"
    :class="wulkanowy ? 'features-table__cell--wulkanowy' : ''"
    title="W trakcie"
  >
    <clock-icon
      title="W trakcie"
      :size="wulkanowy ? 36 : 28"
      fillColor="#009688"
    />
  </td>
  <td
    v-else
    class="features-table__cell features-table__cell--feature features-table__cell--other"
    :class="wulkanowy ? 'features-table__cell--wulkanowy' : ''"
  >
    {{ value }}
  </td>
</template>

<script>
  import CheckIcon from 'vue-material-design-icons/Check.vue';
  import CloseIcon from 'vue-material-design-icons/Close.vue';
  import ClockIcon from 'vue-material-design-icons/ClockOutline.vue';

  export default {
    components: {
      CheckIcon,
      CloseIcon,
      ClockIcon,
    },
    props: {
      value: {
        type: String,
        required: true,
      },
      wulkanowy: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
