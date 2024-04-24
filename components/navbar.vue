<template>
<div class="mainnav">
    <div class="bg-custom py-3 px-6 shadow-2 flex align-items-center topmenus justify-content-between relative lg:static" style="min-height: 84px;">
        
        <Menubar :model="items" class="bg-custom p-3 surface-0 col-10">
            <template #start>
                <span> <NuxtImg src="https://www.paynow.co.zw/blog/wp-content/themes/paynowblog/assets/img/logo-default.svg" alt="Image" height="40" class="toplogo" /></span><span class="logo-text"> | Currency Converter</span>
            </template>
            <template #item="{ item, root }">
                <a v-ripple class="flex align-items-center">
                    <span class="ml-2 menutext">{{ item.label }}</span>
                </a>
            </template>
        </Menubar>
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
    align-items: center !important;
    margin: auto;
}
.p-menubar {
    padding: 0.5rem 0.5rem;
    background: #ffffff;
    color: #334155;
    border: none !important;
    border-radius: 6px;
}
span.logo-text {
    text-transform: uppercase;
    vertical-align: top;
    color: black;
    font-size: 15px;
    font-weight: 800;
    font-family: Nunito, sans-serif;
}
.p-menubar-root-list {
    margin: auto !important;
}
.p-menubar .p-menuitem {
    margin: 2px 0;
    margin-left: 20px !important;
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
    .toptext {
    line-height: 33px;
    }
    .converter-card {
    height: 610px;
    border-radius: 5px !important;
    box-shadow: 0 5px 10px 0 rgba(41,61,102,.2) !important;
    }
    i.info.pi.pi-info-circle {
    margin-right: 4px;
    display: none;
    }
    small.note {
    background-color: #dfe9ff;
    padding: 8px;
    font-size: 4px;
    border-radius: 5px;
    /* margin-bottom: 40px !important; */
    }
    .top-options.col-6 {
    width: 75% !important;
    }
    .selectbtn {
    width: 100% !important;
    }
}
.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: #575757 !important;
    background: #f2f3f7 !important;
    border: none;
}
</style>