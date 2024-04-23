<template>
<div class="mainnav">
    <div class="bg-custom py-3 px-6 shadow-2 flex align-items-center topmenus justify-content-between relative lg:static" style="min-height: 84px;">
            <MegaMenu :model="items"  class="bg-custom p-3 surface-0 col-10">
                <template #start>
                <span> <NuxtImg src="https://www.paynow.co.zw/blog/wp-content/themes/paynowblog/assets/img/logo-default.svg" alt="Image" height="40" class="toplogo" /></span><span class="logo-text"> | Currency Converter</span>
                </template>
                <!-- <template #item="{ item }">
                    <a v-if="item.root" v-ripple :href="`${item.link}`" class="flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg menu-items" style="border-radius: 2rem">
                        <span class="ml-2 menutext">{{ item.label }}</span>
                    </a>
                </template> -->
                <!-- <template #end>
                    <Button  class="first mr-2" label="Login" />
                    <Button class="second" label="Register" />
                </template> -->
            </MegaMenu>
    </div>
</div>
</template>
<script lang="ts" setup>
const items = ref([
    {
        label: 'Buy Airtime',
        root: true,
        command:() => {
          navigateTo('https://www.topup.co.zw/airtime',{external: true})
        }
    },
    {
        label: 'Pay Broadband',
        command:() => {
          navigateTo('https://www.topup.co.zw/broadband',{external: true})
        },
        root: true
    },
    {
        label: 'Pay Bills',
        command:() => {
          navigateTo('https://www.topup.co.zw/broadband',{external: true})
        },
        root: false
    },
    {
        label: 'Pay Insurance',
        command:() => {
          navigateTo('https://www.topup.co.zw/insurance',{external: true})
        },
        root: true
    }
]);
</script>
<style>
.bg-custom {
    background-color: #ffffff !important;
}
span.logo-text {
    text-transform: uppercase;
    vertical-align: top;
    color: black;
    font-size: 15px;
    font-weight: 800;
    font-family: Nunito, sans-serif;
}
img.toplogo {
    height: 25px !important;
}
.top-small {
    font-size: 18px !important;
}
button.p-button.p-component.second {
    height: 40px;
    border-radius: 10px;
    border: none;
    width: 9rem;
    background-color: #0052ff;
    font-family: poppins, sans-serif;
}
.p-megamenu-horizontal .p-megamenu-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: auto !important;
}
.menu-items {
    text-decoration: none !important;
}
button.p-button.p-component.first {
    width: 83px;
    height: 40px;
    border-radius: 10px;
    background-color: #f2f3f7;
    font-family: poppins, sans-serif;
    border: none;
    color: #4c4b4b;
}
.p-megamenu-horizontal .p-megamenu-end {
    margin-left: auto;
    align-self: center;
    margin-top: 6px !important;
}
.p-avatar.p-avatar-circle {
    border-radius: 50% !important;
    color: white;
}
.p-avatar {
    background-color: #185ff9 !important;
    border-radius: 6px;
}
.mainnav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(33,51,67,.12);
    /* padding: 10px 20px; */
}
.p-megamenu-horizontal {
    height: 55px !important;
    border: none !important;
    margin: auto !important;
}
span.ml-2.menutext {
    color: #000000 !important;
    font-family: poppins, sans-serif !important;
    /* padding-bottom: 41px !important; */
    text-transform: capitalize !important;
    font-weight: 500 !important;
    font-size: 16px !important;
}
.p-megamenu .p-menuitem {
    margin-top: -4px !important;
}
@media (max-width: 768px) {
    span.ml-2.menutext {
        color: #3c3131 !important;
        font-family: poppins, sans-serif !important;
        font-weight: 500 !important;
        font-size: 16px !important;
    }
    .p-megamenu.p-megamenu-mobile .p-megamenu-button:hover {
    color: #feffff;
    background: #08090a;
    }
}
.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: #575757 !important;
    background: #f2f3f7 !important;
    border: none;
}
</style>