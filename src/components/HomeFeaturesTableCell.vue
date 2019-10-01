<template>
  <td v-if="value === 'y'" class="yes" :class="wulkanowy ? 'wulkanowy' : ''" title="Dostępne">
    <check-icon
      title="Dostępne"
      :size="wulkanowy ? 36 : 28"
      fillColor="#4caf50"
    />
  </td>
  <td v-else-if="value === 'n'" class="no" :class="wulkanowy ? 'wulkanowy' : ''" title="Niedostępne">
    <close-icon
      title="Niedostępne"
      :size="28"
      fillColor="#e53935"
    />
  </td>
  <td v-else-if="value === 'w'" class="work-in-progress" :class="wulkanowy ? 'wulkanowy' : ''" title="W trakcie">
    <clock-icon
      title="W trakcie"
      :size="wulkanowy ? 36 : 28"
      fillColor="#009688"
    />
  </td>
  <td v-else class="other" :class="wulkanowy ? 'wulkanowy' : ''">
    {{ value }}
  </td>
</template>

<style lang="scss" scoped>
  td {
    text-align: center;
    min-width: 95px;

    &.wulkanowy {
      background-color: #fff !important;
    }

    &.other {
      color: #1e88e5;
    }
  }
</style>

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
