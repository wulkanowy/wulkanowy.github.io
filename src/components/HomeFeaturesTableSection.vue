<template>
  <div class="features-table-section home-section">
    <h2 class="features-table-section__title">Porównanie funkcji</h2>
    <div class="features-table">
      <table class="features-table__table">
        <thead>
          <tr>
            <th class="features-table__th">Funkcja</th>
            <th class="features-table__th">Strona UONET+</th>
            <th class="features-table__th">Aplikacja Dzienniczek+</th>
            <th class="features-table__th features-table__th--wulkanowy">Aplikacja Wulkanowy</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in table" :key="i">
            <td class="features-table__cell features-table__cell--feature-name" v-html="row.feature"></td>
            <table-cell :value="row.uonet" />
            <table-cell :value="row.dzienniczek" />
            <table-cell :value="row.wulkanowy" wulkanowy />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import table from '@/assets/features-table.json';
  import HomeFeaturesTableCell from './HomeFeaturesTableCell.vue';

  export default {
    name: 'home-features-table-section',
    components: {
      TableCell: HomeFeaturesTableCell,
    },
    data: () => ({
      table,
    }),
  };
</script>

<style lang="scss">
  .features-table-section {
    min-height: 100vh;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0 32px 32px;
    background-color: #d32f2f;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto 1fr;
    font-family: 'Roboto', sans-serif;

    @media screen and (max-width: 875px) {
      padding: 0 0 16px;
    }
  }

  .features-table-section__title {
    font-size: 32px;
    text-align: center;
    color: #fff;
    font-weight: 400;
    grid-row: 1;
    grid-column: 1;
  }

  .features-table {
    grid-row: 3;
    width: fit-content;
    max-width: 100vw;
    box-sizing: border-box;
    overflow-x: auto;
    justify-self: center;

    &__table {
      border-spacing: 5px;
      width: fit-content;
      min-width: 75vw;
      padding: 0 16px;
    }

    &__th, &__cell {
      text-align: center;
      background-color: #ffffffcc;
      border-radius: 3px;
      box-shadow:
        0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }

    &__cell {
      padding: 8px;

      &--feature-name {
        font-weight: 500;
      }

      &--feature {
        min-width: 95px;
      }

      &--wulkanowy {
        background-color: #fff;
      }

      &--other {
        color: #1e88e5;
      }
    }

    &__th {
      padding: 4px 8px;

      &--wulkanowy {
        color: #f44336;
        background-color: #fff;
        font-size: 18px;
      }
    }
  }
</style>
