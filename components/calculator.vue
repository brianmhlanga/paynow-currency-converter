<template>
    <div class="content-center">
    <div class="exchange-table col-10">
    <div class="topheaders">
        <div  class="live-text text-900 font-medium text-xl mb-3 text-white">Paynow Live Exchange Rates</div>
    </div>
        <div class="card-alignment">
        <div class="surface-card p-4 card-table border-round p-fluid col-12">
            <small class="note"><i class="info pi pi-info-circle"></i>Please note that the table shows ZiG/USD, ZiG/GBP, ZiG/EUR, ZiG/ZAR, ZiG/BWP, and Inverses of listed pairs.</small>
        <div class="top-options col-6">
            <SelectButton v-model="select_value" :options="options" aria-labelledby="basic" class="selectbtn" />
        </div>
        <DataTable v-model:filters="filters" :value="rates" :rowClass="rowClass" paginator :rows="10" dataKey="id" filterDisplay="row" :loading="loading">
            <!-- <template #header>
                <div class="flex justify-content-end">
                    <IconField iconPosition="left">
                        <InputIcon>
                            <i class="pi pi-search" />
                        </InputIcon>
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                    </IconField>
                </div>
            </template> -->
            <template #empty> No rates found. </template>
            <template #loading> Loading exchange rate data. Please wait. </template>
            <Column header="Currency" filter="label" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${data.flag.toLowerCase()}`" style="width: 24px" />
                        <span>{{ data.label }}</span>
                    </div>
                </template>
            </Column>
            <Column field="rate.avg" header="Amount" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ select_value === 'Normal' ? (1/data.rate?.avg).toFixed(6) : (select_value === 'Inverse' && data?.symbol === 'ZiG' ? 'Inverse' : data.rate?.avg) }}
                </template>
            </Column>
            <Column field="rate.ask" header="Change (24h)" style="min-width: 12rem">
                <template #body="{ data }">
                    <span v-bind:style="{ color: (((data.rate?.avg - data.rate?.prev)/data.rate?.prev)*100) >= 0 ? 'green' : 'red' }">
                        <span v-if="(((data.rate?.avg - data.rate?.prev)/data.rate?.prev)*100) >= 0">+</span>{{ (((data.rate?.avg - data.rate?.prev)/data.rate?.prev)*100).toFixed(2) }}%
                    </span>
                </template>
            </Column>
            </DataTable>
      </div>
      </div>
    </div>
</div>
</template>
<script lang="ts" setup>
const active = ref(0);
import { FilterMatchMode } from 'primevue/api';
const amount = ref()
const loading = ref(false)
const select_value = ref('Normal');
const options = ref(['Normal', 'Inverse']);
const first_symbol = ref<string>()
const second_symbol = ref<string>()
const selectedFrom = ref({"name":"ZiG/ZiG","symbol":"ZiG","label":"ZiG - Zimbabwean Gold","flag":"ZW","rate":{"bid":1,"ask":1,"avg":1}})
const selectedTo = ref()
const total = ref()
const rowClass = (data:any) => {
    return [{ 'top-blue': data.symbol === 'ZiG' }];
};
const rates = ref([
   {
        "name": "ZiG/ZiG",
        "symbol": "ZiG",
        "label": "ZiG - Zimbabwean Gold",
        "flag": "ZW",
        "rate": {
            "prev":1,
            "bid": 1,
            "ask": 1,
            "avg": 1
        }
    },
    {
        "name": "USD/ZiG",
        "symbol": "USD",
        "label": "USD - US Dollar",
        "flag": "US",
        "rate": {
            "prev":13.7437,
            "bid": 13.0102,
            "ask": 13.6772,
            "avg": 13.3437
        }
    },
    {
        "name": "GBP/ZiG",
        "symbol": "GBP",
        "label": "GBP - British Pound",
        "flag": "GB",
        "rate": {
            "prev":16.2709,
            "bid": 16.156,
            "ask": 16.9857,
            "avg": 16.5709
        }
    },
    {
        "name": "EUR/ZiG",
        "symbol": "EUR",
        "label": "EUR - Euro",
        "flag": "EU",
        "rate": {
            "prev": 13.1644,
            "bid": 13.8077,
            "ask": 14.521,
            "avg": 14.1644
        }
    },
    {
        "name": "ZiG/ZAR",
        "symbol": "ZAR",
        "label": "ZAR - South African Rand",
        "flag": "ZA",
        "rate": {
            "prev": 1.2293,
            "bid": 1.3931,
            "ask": 1.4654,
            "avg": 1.4293
        }
    },
    {
        "name": "BWP/ZiG",
        "symbol": "BWP",
        "label": "BWP - Botswana Pula",
        "flag": "BW",
        "rate": {
            "prev": 0.9054,
            "bid": 0.9406,
            "ask": 0.9902,
            "avg": 0.9654
        }
    }
]);
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});
const convert = () => {
    let a = selectedFrom.value
    first_symbol.value = selectedFrom.value?.symbol
    second_symbol.value = selectedTo.value?.symbol
    let b = selectedTo.value
    if (a.symbol === "ZiG") {
       total.value = amount.value /  b?.rate?.avg
       return
    }
    else {
        total.value = amount.value * a?.rate?.avg
    }
}
const switchCurrencies = () => {
    let a = selectedFrom.value
    let b = selectedTo.value
    selectedFrom.value = b
    selectedTo.value = a
    return
}

</script>
<style>
.colorCalc {
    background-color: #040343 !important;
    margin-top: -3px !important;
}
.p-tabview-panels {
    margin-top: 30px !important;
}
.selectbtn {
    width: 32% !important;
}
p.total {
    font-size: 35px !important;
    font-family: poppins, sans-serif !important;
    font-weight: 500 !important;
}
.p-datatable .p-datatable-tbody > tr {
    height: 70px !important;
    background: #ffffff;
    color: #334155;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s, outline-color 0.2s;
}
.p-selectbutton .p-button.p-highlight::before {
    background: #185ff9;
    border-color: #185ff9;
    color: red !important;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
}
.p-selectbutton .p-button.p-highlight {
    background: #f1f5f9;
    border-color: #f1f5f9;
    color: #ffffff;
}
.live-text {
    font-size: 25px !important;
    color: #2d3040 !important;
}
i.info.pi.pi-info-circle {
    margin-right: 4px;
}
.top-options {
    margin-top: 20px;
}
.card-table {
    border-radius: 5px !important;
    box-shadow: 0 5px 10px 0 rgba(41,61,102,.2) !important;
}
.exchange-table.col-10 {
    margin-top: 80px;
}
small.note {
    background-color: #dfe9ff;
    padding: 8px;
    border-radius: 5px;
    /* margin-bottom: 40px !important; */
}
.content-center {
    justify-content: center;
    align-items: center;
    align-content: center;
    display: flex !important;
}
tr.p-row-even.top-blue {
    background-color: #185ff9 !important;
    color: white !important;
    /* border-radius: 0px !important; */
}
</style>