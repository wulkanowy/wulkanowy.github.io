<template>
  <div id="features-table" class="home-section">
    <h2 class="title">Porównanie funkcji</h2>
    <table>
      <thead>
        <tr>
          <th>Funkcja</th>
          <th>Strona UONET+</th>
          <th>Aplikacja Dzienniczek+</th>
          <th class="wulkanowy">Aplikacja Wulkanowy</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in table" :key="i">
          <td class="feature-name" v-html="row.feature"></td>
          <table-cell :value="row.uonet" />
          <table-cell :value="row.dzienniczek" />
          <table-cell :value="row.wulkanowy" wulkanowy />
        </tr>
      </tbody>
    </table>
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
  #features-table {
    min-height: 100vh;
    box-sizing: border-box;
    padding: 0 32px 32px;
    background-color: #d32f2f;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto 1fr;
    font-family: 'Roboto', sans-serif;

    @media screen and (max-width: 875px) {
      padding: 0 16px 16px;
    }

    @media screen and (max-width: 450px) {
      padding: 0 8px 16px;
    }

    .title {
      font-size: 32px;
      text-align: center;
      color: #fff;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      grid-row: 1;
      grid-column: 1;
    }

    table {
      border-spacing: 5px;
      grid-row: 3;

      th {
        padding: 8px;

        &.wulkanowy {
          color: #f44336;
          background-color: #fff;
          font-size: 18px;
        }
      }

      .feature-name {
        font-weight: 500;
      }

      th, td {
        text-align: center;
        padding: 4px 8px;
        background-color: #ffffffcc;
        border-radius: 3px;
        box-shadow:
          0px 2px 4px -1px rgba(0, 0, 0, 0.2),
          0px 4px 5px 0px rgba(0, 0, 0, 0.14),
          0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      }
    }
  }
</style>
