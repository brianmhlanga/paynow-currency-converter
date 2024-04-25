<template>
<div style="background-image: linear-gradient(to right, rgb(24, 95, 249), rgb(153, 162, 255));margin-top: 84px !important;padding-top: 50px;height: 420px;">

</div>
<div class="hanging">
			<div class="container">
          <div class="topcard col-10">
          <div class="topheaders">
            <h1 class="text-5xl toptext text-white font-bold">Paynow Currency Converter</h1>
            <p class="mt-0 mb-4 text-700 top-small text-white line-height-3">Check live foreign currency exchange rates</p>    
          </div>
          <div class="card-alignment">
            <div class="surface-card converter-card p-4  border-round p-fluid col-12">
            <TabView v-model:activeIndex="active">
                <TabPanel>
                  <template #header>
                      <div class="flex align-items-center gap-2">
                          <Avatar icon="pi pi-sync" shape="circle" />
                          <span class="font-bold white-space-nowrap">Convert</span>
                      </div>
                  </template>
                      <div class="grid formgrid p-fluid">
                            <div class="field mb-4 col-12 md:col-4">
                                <label for="item" class="font-medium text-900">Amount</label>
                                <IconField iconPosition="left">
                                    <InputIcon>
                                        <span class="">{{ selectedFrom?.sign }}</span>
                                    </InputIcon>
                                    <InputText v-model="amount" type="number" />
                                </IconField>
                            </div>
                            <div class="field mb-4 col-12 md:col-4">
                            <label for="price" class="font-medium text-900">From</label>
                            <div class="flex align-content-center">
                                <Dropdown v-model="selectedFrom" :options="rates" filter optionLabel="label" placeholder="Select Currency" class="w-full h-20 md:w-12" :disabled="selectedFrom?.symbol === 'ZiG' && selectedTo?.symbol != 'ZiG'">
                                    <template #value="slotProps">
                                        <div v-if="slotProps.value" class="flex align-items-center">
                                            <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.value.flag.toLowerCase()}`" style="width: 18px" />
                                            <div>{{ slotProps.value.label }}</div>
                                        </div>
                                        <span v-else>
                                            {{ slotProps.placeholder }}
                                        </span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="flex align-items-center">
                                            <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.option.flag.toLowerCase()}`" style="width: 18px" />
                                            <div>{{ slotProps.option.label }}</div>
                                        </div>
                                    </template>
                                </Dropdown>
                                <Button @click="switchCurrencies()" icon="pi pi-arrow-right-arrow-left" severity="success" class="ml-2 ex-button normal" rounded outlined aria-label="Bookmark"/>
                            </div>
                            </div>
                            <div class="field mobile-only mb-4 col-12 md:col-4">
                            <div class="flex align-content-center">
                                <Button @click="switchCurrencies()" icon="pi pi-arrow-right-arrow-left" severity="success" class="ml-2 ex-button" rounded outlined aria-label="Bookmark"/>
                            </div>
                            </div>
                            <div class="field mb-4 col-12 md:col-4">
                                <label for="price" class="font-medium text-900">To</label>
                                <Dropdown v-model="selectedTo" :options="rates" filter optionLabel="label" placeholder="Select Currency" class="w-full md:w-12" :disabled="selectedTo?.symbol === 'ZiG' && selectedFrom?.symbol != 'ZiG'">
                                    <template #value="slotProps">
                                        <div v-if="slotProps.value" class="flex align-items-center">
                                            <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.value.flag.toLowerCase()}`" style="width: 18px" />
                                            <div>{{ slotProps.value.label }}</div>
                                        </div>
                                        <span v-else>
                                            {{ slotProps.placeholder }}
                                        </span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="flex align-items-center">
                                            <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.option.flag.toLowerCase()}`" style="width: 18px" />
                                            <div>{{ slotProps.option.label }}</div>
                                        </div>
                                    </template>
                                </Dropdown>
                            </div>
                    </div>
                        <div v-if="total" style="position: relative;"><div><p class="sc-1c293993-0 hnFRxk">
                            {{ amount }} {{first_symbol}} =</p>
                            <p class="total">{{total ? total.toFixed(2) : 0}} {{ second_symbol }}</p>
                        </div>
                    </div>
                    <Button v-if="amount && selectedFrom && selectedTo" @click="convert()"  class="w-12rem convert-btn p-button-custom" label="Convert" />
                    <Button v-else @click="convert()" class="w-12rem convert-btn p-button-custom" label="Convert" disabled/>
                </TabPanel>
            </TabView>
            </div>
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
const first_symbol = ref<string>()
const second_symbol = ref<string>()
const selectedFrom = ref({"name":"ZiG/ZiG","symbol":"ZiG","sign":"ZiG","label":"ZiG - Zimbabwean Gold","flag":"ZW","rate":{"bid":1,"ask":1,"avg":1}})
const selectedTo = ref()
const total = ref()
const rowClass = (data:any) => {
    return [{ 'bg-primary': data.symbol === 'ZiG' }];
};
const rates = ref([
   {
        "name": "ZiG/ZiG",
        "symbol": "ZiG",
        "sign": "ZiG",
        "label": "ZiG - Zimbabwean Gold",
        "flag": "ZW",
        "rate": {
            "bid": 1,
            "ask": 1,
            "avg": 1
        }
    },
    {
        "name": "USD/ZiG",
        "symbol": "USD",
        "sign": "$",
        "label": "USD - US Dollar",
        "flag": "US",
        "rate": {
            "bid": 13.0102,
            "ask": 13.6772,
            "avg": 13.3437
        }
    },
    {
        "name": "GBP/ZiG",
        "symbol": "GBP",
        "sign": "£",
        "label": "GBP - British Pound",
        "flag": "GB",
        "rate": {
            "bid": 16.156,
            "ask": 16.9857,
            "avg": 16.5709
        }
    },
    {
        "name": "EUR/ZiG",
        "symbol": "EUR",
        "sign": "€",
        "label": "EUR - Euro",
        "flag": "EU",
        "rate": {
            "bid": 13.8077,
            "ask": 14.521,
            "avg": 14.1644
        }
    },
    {
        "name": "ZiG/ZAR",
        "symbol": "ZAR",
        "sign": "R",
        "label": "ZAR - South African Rand",
        "flag": "ZA",
        "rate": {
            "bid": 1.3931,
            "ask": 1.4654,
            "avg": 1.4293
        }
    },
    {
        "name": "BWP/ZiG",
        "symbol": "BWP",
        "sign": "P",
        "label": "BWP - Botswana Pula",
        "flag": "BW",
        "rate": {
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
.heroheight {
    padding: 0;
    border: 1px solid var(--surface-border);
    border-top: 0 none;
    margin-top: 85px;
}

span.tagline {
    background-color: #0052ff;
    padding: 10px;
    color: white;
    font-size: 15px;
    border-radius: 21px;
    width: 250px;
}
p.total {
    font-size: 40px !important;
}

.p-button-custom {
    color: #ffffff;
    background: #2566fa !important;
    border: 1px solid #2063f9 !important;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s, outline-color 0.2s;
    border-radius: 6px;
    outline-color: transparent;
}
.convert-btn {
    height: 50px;
}
.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    background: #ffffff;
    border-color: #e2e8f0;
    color: #000000 !important;
}
button.p-button.p-component.p-button-icon-only.p-button-success.p-button-rounded.p-button-outlined.ml-2 {
    width: 41px !important;
    /* height: auto; */
    margin-top: 7px !important;
}
.p-fluid .p-dropdown .p-dropdown-label {
    width: 1%;
    height: 50px !important;
    padding: 15px !important;
}
.topheaders {
    text-align: center;
}
.p-fluid .p-inputtext {
    width: 100%;
    height: 50px !important;
}
.converter-card {
    height: 420px;
    border-radius: 5px !important;
    box-shadow: 0 5px 10px 0 rgba(41,61,102,.2) !important;
}
.p-tabview .p-tabview-nav {
    background: #ffffff;
    border: none !important;
    /* border: 1px solid #e2e8f0; */
    /* border-width: 0 0 1px 0; */
}
.hero {
    display: flex;
    height: 100vh;
    background-color: #fcfbfe;
}
.hanging {
    margin-top: -300px;
}
.topcard {
    margin: auto;
}
.toptext {
    line-height: 0.2;
}
.card-alignment {
    justify-content: center;
    align-items: center;
    align-content: center;
    display: flex !important;
}

.hero-left {
  flex: 1;
  padding: 0px 0px 60px 0; /* Remove padding on the left */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 80px;
}

.TagLine {
  font-size: 3em;
  margin-bottom: 15px;
}

.Heading-tag {
  color: #fd8d14;
}

.Hero-paragraph {
  font-size: 1em;
  margin-bottom: 20px;
  color: #777;
  max-width: 400px;
}

.Hero-button {
    font-size: 1em;
    /* font-weight: bold; */
    padding: 10px 15px;
    border: none;
    width: 200px;
    height: 53px;
    background-color: #4c4b4b;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    align-self: start;
}
.mobile-only {
    display: none;
}
.Hero-button:hover {
    background-color: #f2f3f7;
    border: 1px solid #231f20;
    color: #313131;
}
.avatar-section {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.avatar-group {
  display: flex;
  gap: -20px;
}

.avatar-group img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: transform 0.3s;
  margin-left: -5px;
}

.avatar-text {
  margin-left: 20px;
  font-size: 1em;
  color: #777;
}

.avatar-num{
 color: #fd8d14;
   font-size: 1em;
  font-weight:bold;
}

.hero-right {
  flex: 1;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-right img {
    width: auto;
    height: 500px;
    border-radius: 20px;
}
/* Responsive styles for smaller devices */
@media only screen and (max-width: 768px) {
  .hero {
    flex-direction: column;
  }
  .mobile-only {
    display: block !important;
   }
   button.p-button.p-component.p-button-icon-only.p-button-success.p-button-rounded.p-button-outlined.ml-2.ex-button.normal {
    display: none !important;
}

  .hero-left {
    margin-top: 5rem;
    text-align: center;
     margin-left: 0px;
  }

  .hero-right img {
    display: none;
  }

  .Hero-paragraph {
    text-align: center;
    max-width: 100%;
    margin-top: 20px;
  }

  .Hero-button {
    width: 100%;
    margin-top: 20px;
  }

  .avatar-section {
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }

  .avatar-text {
    text-align: center;
  }
  
  .avatar-num{
 color: #fd8d14;
   font-size: 1em;
  font-weight:bold;
    
}

}
</style>