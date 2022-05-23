class MenuLamgElement extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {

      {/* <div class="font-noto_sans_tc font-light lg:text-[20px] xl:text-[25px] border-b border-transparent hover:text-minerva-a1 hover:border-b-2 hover:border-minerva-a1 cursor-pointer" >
      <a href="index_ko.html">简</a>
    </div> */}

        this.innerHTML = `
        
        <header class="fixed top-0 left-0 w-full bg-white border-t-[12px] 2xl:border-t-[16px] border-minerva-a1 z-50" >
        <div class="w-full h-16">
          <div class="w-full h-full flex flex-row flex-wrap items-center justify-between text-p429" >
            <!-- Logo -->
            <div class="ml-5">
              <span class="font-klarheit_semibold text-[24px] lg:text-[22px] xl:text-[25px] text-minerva-b1">minerva</span>
              <span class="font-klarheit text-[24px] lg:text-[22px] xl:text-[25px] text-minerva-a1">foods</span>
            </div>
            <!-- Título -->
            <div class="hidden lg:flex order-3 lg:order-2 lg:w-[25%] ml-5 md:ml-0 font-klarheit_semibold tracking-[0.36px] text-[13px] xs:text-[15px] md:text-[18px] lg:text-[14px] xl:text-[18px] text-p429" >
              ${this.getAttribute('title')}
            </div>
  
            <!-- PDFS -->
            <div class="hidden lg:order-4 lg:flex lg:flex-row lg:w-[25%] lg:items-center lg:flex-nowrap mt-4 lg:justify-around" >
              <a href="${this.getAttribute('pdflink')}" target="_blank" class="group flex flex-nowrap border-b-8 items-center self-end pb-2 border-transparent font-klarheit_semibold lg:text-[15px] xl:text-[17px] 2xl:text-[19px] tracking-[0.36px] hover:text-minerva-a1 hover:border-b-8 hover:border-minerva-a1" >
                <svg id="MDI_download-box-outline" data-name="MDI / download-box-outline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" > <g id="Boundary" fill="#a3aaad" stroke="rgba(0,0,0,0)" stroke-width="1" opacity="0" > <rect width="24" height="24" stroke="none" /> <rect x="0.5" y="0.5" width="23" height="23" fill="none" /> </g> <path class="group-hover:fill-minerva-a1" id="Path_download-box-outline" data-name="Path / download-box-outline" d="M8,17V15h8v2H8m8-7-4,4L8,10h2.5V7h3v3H16M5,3H19a2,2,0,0,1,2,2V19a1.993,1.993,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2.006,2.006,0,0,1,5,3M5,5V19H19V5Z" fill="#a3aaad" /> </svg>
                ${this.getAttribute('pdftitle')}
              </a>
              <!-- <a class="group flex flex-nowrap border-b-8 items-center self-end pb-2 border-transparent font-klarheit_semibold lg:text-[15px] xl:text-[17px] 2xl:text-[19px] tracking-[0.36px] hover:text-minerva-a1 hover:border-b-8 hover:border-minerva-a1" >
                <svg id="MDI_download-box-outline" data-name="MDI / download-box-outline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" > <g id="Boundary" fill="#a3aaad" stroke="rgba(0,0,0,0)" stroke-width="1" opacity="0" > <rect width="24" height="24" stroke="none" /> <rect x="0.5" y="0.5" width="23" height="23" fill="none" /> </g> <path class="group-hover:fill-minerva-a1" id="Path_download-box-outline" data-name="Path / download-box-outline" d="M8,17V15h8v2H8m8-7-4,4L8,10h2.5V7h3v3H16M5,3H19a2,2,0,0,1,2,2V19a1.993,1.993,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2.006,2.006,0,0,1,5,3M5,5V19H19V5Z" fill="#a3aaad" /> </svg>
                indicadores
              </a> -->
            </div>
            <!-- Menu Internacional -->
            <div class="hidden lg:order-4 lg:flex flex-row items-baseline lg:space-x-3 xl:space-x-5 2xl:space-x-7 mr-8 font-montserrat_medium leading-tight lg:text-[16px] xl:text-[20px]" >
              <div class="border-b-2 border-transparent hover:text-minerva-a1 hover:border-b-2 hover:border-minerva-a1 cursor-pointer" >
                <a href="index.html"> PT </a>
              </div>
              <div class="border-b-2 border-transparent hover:text-minerva-a1 hover:border-b-2 hover:border-minerva-a1 cursor-pointer" >
                <a href="index_EN.html"> EN </a>
              </div>
              <div class="border-b border-transparent hover:text-minerva-a1 hover:border-b-2 hover:border-minerva-a1 cursor-pointer" >
                <a href="index_ES.html"> ES </a>
              </div>
              
              <div class="font-noto_sans_tc font-thin lg:text-[20px] xl:text-[25px] border-b border-transparent hover:text-minerva-a1 hover:border-b-2 hover:border-minerva-a1 cursor-pointer" >
                <a href="index_ch.html">繁</a>
              </div>
              <div class="font-noto_sans_tc font-light lg:text-[20px] xl:text-[25px] border-b border-transparent hover:text-minerva-a1 hover:border-b-2 hover:border-minerva-a1 cursor-pointer" >
                <a href="index_cht.html">简</a>
              </div>
              <div class="font-noto_kufi_arabic font-normal lg:text-lg xl:text-[20px] border-b border-transparent hover:text-minerva-a1 hover:border-b-2 hover:border-minerva-a1 cursor-pointer" >
                <a href="index_ab.html">العربية</a>
              </div>
            </div>
            <!-- Hamburger -->
            <div class="order-2 lg:hidden mr-5 cursor-pointer" id="hbButton">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </div>
        </div>
      </header>
        `;
    }
}
window.customElements.define('wc-header', MenuLamgElement);  