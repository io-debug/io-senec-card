import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

class IoSenecCard extends LitElement {

  static get properties() {
    return {
      hass: {},
      config: {},
    };
  }



  /* Function will render the HTML of the card*/
  render() {
    const data = {};
    const ledColor ={
      "white": "#fff",
      "green": "#008d36",
      "red": "#e30613"
    };

    var i = 0;
    this.config.entities.map((ent) => {
      const stateObj = this.hass.states[ent];

        var state = "";

        if (stateObj) {
          state = String(stateObj.state);
        }
      data[i] = state;
        /*
         data[0] = "Systemstatus"
         data[1] = "Ladestand des Akkus in Prozent"
         data[2] = "Aktueller Akku Strom in Ampere"
         data[3] = "Aktuelle Akkuspannung in Volt"
         data[4] = "Aktuelle Akku Leistung in Watt"
         data[5] = "Aktuell erzeugter PV-Strom in Watt"
         data[6] = "Aktueller Hausverbrauch in Watt"
         data[7] = "Aktuelle Netz Leistung in Watt"
         */

      i++;
    });

      //show or hide the battery arrows
      var batArrowIn = "visibility:hidden";
      var batArrowOut = "visibility:hidden";

      if(data[4]>0) {
         batArrowIn = "visibility:visible";
         batArrowOut = "visibility:hidden";
      }
      else if (data[4]<0)
      {
         batArrowIn = "visibility:hidden";
         batArrowOut = "visibility:visible";
      }

      //Basic implementation to set the "Störungs-LED"
      var errorLed = ledColor["white"];
      if(data[0].indexOf("FEHLER") !== -1){
         errorLed = ledColor["red"];
      }
   

    return html`
      <div>
      <?xml version="1.0" encoding="UTF-8" standalone="no"?>
      <svg
         id="Ebene_1"
         data-name="Ebene 1"
         viewBox="0 0 303 151.5"
         version="1.1"
         sodipodi:docname="display.svg"
         inkscape:version="1.2.1 (9c6d41e410, 2022-07-14)"
         xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
         xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:svg="http://www.w3.org/2000/svg"
         xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
         xmlns:cc="http://creativecommons.org/ns#"
         xmlns:dc="http://purl.org/dc/elements/1.1/">
        <metadata
           id="metadata123">
          <rdf:RDF>
            <cc:Work
               rdf:about="">
              <dc:format>image/svg+xml</dc:format>
              <dc:type
                 rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
            </cc:Work>
          </rdf:RDF>
        </metadata>
        <sodipodi:namedview
           pagecolor="#ffffff"
           bordercolor="#666666"
           borderopacity="1"
           objecttolerance="10"
           gridtolerance="10"
           guidetolerance="10"
           inkscape:pageopacity="0"
           inkscape:pageshadow="2"
           inkscape:window-width="1920"
           inkscape:window-height="1017"
           id="namedview121"
           showgrid="false"
           inkscape:zoom="11.313708"
           inkscape:cx="129.44474"
           inkscape:cy="75.925591"
           inkscape:window-x="1912"
           inkscape:window-y="-8"
           inkscape:window-maximized="1"
           inkscape:current-layer="Ebene_1"
           inkscape:showpageshadow="2"
           inkscape:pagecheckerboard="0"
           inkscape:deskcolor="#d1d1d1" />
        <defs
           id="defs4">
          <linearGradient
             id="linearGradient4315"
             inkscape:swatch="solid">
            <stop
               style="stop-color:#000000;stop-opacity:1;"
               offset="0"
               id="stop4313" />
          </linearGradient>
          <style
             id="style2">.cls-1,.cls-3,.cls-6,.cls-7{fill:#3c3c3b;}.cls-1{stroke:#3c3c3b;}.cls-1,.cls-3,.cls-9{stroke-miterlimit:10;}.cls-2{fill:#ccdae4;}.cls-3,.cls-4,.cls-6,.cls-8,.cls-9{stroke:#dadada;}.cls-3,.cls-4,.cls-6,.cls-8{stroke-width:2px;}.cls-4,.cls-5{fill:#dadada;}.cls-4,.cls-6,.cls-8{stroke-linecap:round;stroke-linejoin:round;}.cls-8{fill:none;}.cls-10,.cls-9{fill:#fff;}</style>
        </defs>
        <title
           id="title6">SENEC Display</title>
        <rect
           class="cls-1"
           x="0.5"
           y="0.5"
           width="302"
           height="150.5"
           rx="8.25"
           id="rect8" />
        <rect
           class="cls-2"
           x="31.674339"
           y="32.033062"
           width="133.40132"
           height="67.933876"
           rx="3.6264436"
           id="pixelDisplayBg"
           style="fill:#ccdae4;fill-opacity:1;stroke-width:1.05701077" />
        <circle
           class="cls-3"
           cx="31.57"
           cy="129.63"
           r="12.87"
           id="circle12" />
        <polygon
           class="cls-4"
           points="28.14 132.83 35.01 132.83 31.57 126.25 28.14 132.83"
           id="polygon14" />

          <polygon
           class="cls-4"
           points="31.57,126.25 28.14,132.83 35.01,132.83 "
           id="polygon14-3a"
           style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;${batArrowIn}"
           transform="translate(9.9675235,-40.267827)" />
           <polygon
           class="cls-4"
           points="31.57,133.25 28.14,127.83 35.01,127.83 "
           id="polygon14-3b"
           style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;${batArrowOut}"
           transform="translate(9.9675235,-40.267827)" />

        <circle
           class="cls-3"
           cx="65"
           cy="129.54"
           r="12.87"
           id="circle16" />
        <polygon
           class="cls-4"
           points="68.44 126.33 61.56 126.33 65 132.92 68.44 126.33"
           id="polygon18" />
        <circle
           class="cls-3"
           cx="98.38"
           cy="129.54"
           r="12.87"
           id="circle20" />
        <path
           class="cls-5"
           d="M365.69,324c0,2.78-1.69,4.26-3.76,4.26s-3.63-1.66-3.63-4.1,1.6-4.25,3.75-4.25S365.69,321.56,365.69,324Zm-6.27.13c0,1.73.93,3.28,2.57,3.28s2.59-1.53,2.59-3.36c0-1.61-.83-3.29-2.57-3.29S359.42,322.32,359.42,324.09Z"
           transform="translate(-267.06 -194.63)"
           id="path22" />
        <path
           class="cls-5"
           d="M367.05,320h1v3.9h0c.21-.31.43-.6.63-.86l2.47-3h1.3l-2.93,3.43,3.16,4.66h-1.24l-2.66-4-.77.88v3.09h-1Z"
           transform="translate(-267.06 -194.63)"
           id="path24" />
        <circle
           class="cls-3"
           cx="131.38"
           cy="129.54"
           r="12.87"
           id="circle26" />
        <path
           class="cls-5"
           d="M394,324.3h-3.15v2.91h3.51v.88h-4.55V320h4.37v.88h-3.33v2.55H394Z"
           transform="translate(-267.06 -194.63)"
           id="path28" />
        <path
           class="cls-5"
           d="M395.54,326.81a3.68,3.68,0,0,0,1.87.53c1.07,0,1.69-.56,1.69-1.38s-.43-1.18-1.52-1.6c-1.32-.47-2.14-1.15-2.14-2.29a2.34,2.34,0,0,1,2.62-2.2,3.6,3.6,0,0,1,1.79.4l-.29.85a3.19,3.19,0,0,0-1.54-.39c-1.1,0-1.52.66-1.52,1.22,0,.75.49,1.12,1.61,1.55,1.36.53,2.06,1.19,2.06,2.38s-.92,2.33-2.83,2.33a4.13,4.13,0,0,1-2.06-.52Z"
           transform="translate(-267.06 -194.63)"
           id="path30" />
        <path
           class="cls-5"
           d="M407.25,327.82a5.22,5.22,0,0,1-2.14.39,3.77,3.77,0,0,1-4-4.09,4,4,0,0,1,4.22-4.25,4.4,4.4,0,0,1,1.92.36l-.25.85a3.85,3.85,0,0,0-1.63-.33,3,3,0,0,0-3.16,3.33,2.94,2.94,0,0,0,3.11,3.25A4.08,4.08,0,0,0,407,327Z"
           transform="translate(-267.06 -194.63)"
           id="path32" />
        <circle
           class="cls-3"
           cx="164.38"
           cy="129.54"
           r="12.88"
           id="circle34" />
        <circle
           class="cls-6"
           cx="164.5"
           cy="129.31"
           r="6.37"
           id="circle36" />
        <rect
           class="cls-7"
           x="161.88"
           y="121.19"
           width="5.13"
           height="3.75"
           id="rect38" />
        <line
           class="cls-8"
           x1="164.44"
           y1="119.56"
           x2="164.44"
           y2="127.63"
           id="line40" />
        <circle
           class="cls-9"
           cx="203.63"
           cy="28.63"
           r="5.75"
           style="fill:${(data[4] == 0) ? ledColor["green"]: ledColor["white"]}"
           id="ledPassive" />
        <circle
           class="cls-9"
           cx="203.63"
           cy="47.04"
           r="5.75"
           style="fill:${(data[4] > 0) ? ledColor["green"]: ledColor["white"]}"
           id="ledCharge" />
        <circle
           class="cls-9"
           cx="203.63"
           cy="66.46"
           r="5.75"
           style="fill:${(data[4] < 0) ? ledColor["green"]: ledColor["white"]}"
           id="ledDischarge" />
        <circle
           class="cls-9"
           cx="203.63"
           cy="84.63"
           r="5.75"
           style="fill:${errorLed}"
           id="ledError" />
        <path
           class="cls-5"
           d="M482.09,220.16a12.59,12.59,0,0,1,2-.16,3.27,3.27,0,0,1,2.27.68,2.15,2.15,0,0,1,.71,1.69,2.4,2.4,0,0,1-.62,1.72A3.37,3.37,0,0,1,484,225a3.56,3.56,0,0,1-.84-.07v3.24h-1.05Zm1.05,3.9a3.44,3.44,0,0,0,.86.08c1.26,0,2-.61,2-1.72s-.76-1.59-1.91-1.59a4.11,4.11,0,0,0-1,.09Z"
           transform="translate(-267.06 -194.63)"
           id="path50" />
        <path
           class="cls-5"
           d="M491.34,228.15l-.08-.73h0a2.16,2.16,0,0,1-1.77.86,1.66,1.66,0,0,1-1.78-1.67c0-1.4,1.25-2.17,3.49-2.16v-.12a1.19,1.19,0,0,0-1.32-1.34,2.93,2.93,0,0,0-1.51.43l-.24-.69a3.64,3.64,0,0,1,1.91-.52c1.77,0,2.21,1.21,2.21,2.38v2.17a8.47,8.47,0,0,0,.09,1.39Zm-.15-3c-1.15,0-2.46.18-2.46,1.3a.93.93,0,0,0,1,1,1.45,1.45,0,0,0,1.41-1,1.35,1.35,0,0,0,.06-.34Z"
           transform="translate(-267.06 -194.63)"
           id="path52" />
        <path
           class="cls-5"
           d="M493.77,227.07a2.79,2.79,0,0,0,1.39.42c.77,0,1.13-.39,1.13-.86s-.3-.78-1.08-1.07c-1-.37-1.54-.95-1.54-1.65a1.8,1.8,0,0,1,2-1.7,2.9,2.9,0,0,1,1.42.36l-.26.77a2.31,2.31,0,0,0-1.19-.34c-.62,0-1,.36-1,.79s.35.7,1.1,1c1,.38,1.53.89,1.53,1.75,0,1-.79,1.74-2.17,1.74a3.34,3.34,0,0,1-1.64-.4Z"
           transform="translate(-267.06 -194.63)"
           id="path54" />
        <path
           class="cls-5"
           d="M498.52,227.07a2.79,2.79,0,0,0,1.39.42c.77,0,1.13-.39,1.13-.86s-.3-.78-1.08-1.07c-1-.37-1.54-.95-1.54-1.65a1.8,1.8,0,0,1,2-1.7,2.87,2.87,0,0,1,1.42.36l-.26.77a2.31,2.31,0,0,0-1.19-.34c-.62,0-1,.36-1,.79s.35.7,1.11,1c1,.38,1.52.89,1.52,1.75,0,1-.79,1.74-2.17,1.74a3.3,3.3,0,0,1-1.63-.4Z"
           transform="translate(-267.06 -194.63)"
           id="path56" />
        <path
           class="cls-5"
           d="M504.59,220.71a.62.62,0,0,1-.67.65.63.63,0,0,1-.64-.65.65.65,0,0,1,.66-.66A.63.63,0,0,1,504.59,220.71Zm-1.17,7.44v-5.81h1.05v5.81Z"
           transform="translate(-267.06 -194.63)"
           id="path58" />
        <path
           class="cls-5"
           d="M506.63,222.34l1.14,3.27a14.72,14.72,0,0,1,.47,1.48h0c.13-.48.3-1,.49-1.48l1.12-3.27H511l-2.28,5.81h-1l-2.21-5.81Z"
           transform="translate(-267.06 -194.63)"
           id="path60" />
        <path
           class="cls-5"
           d="M482.09,238.56h1.05v7.21h3.45v.88h-4.5Z"
           transform="translate(-267.06 -194.63)"
           id="path62" />
        <path
           class="cls-5"
           d="M490.93,246.65l-.08-.73h0a2.16,2.16,0,0,1-1.77.86,1.66,1.66,0,0,1-1.78-1.67c0-1.4,1.25-2.17,3.49-2.16v-.12a1.19,1.19,0,0,0-1.31-1.34,3,3,0,0,0-1.52.43l-.24-.69a3.64,3.64,0,0,1,1.91-.52c1.78,0,2.21,1.21,2.21,2.38v2.17a8.47,8.47,0,0,0,.09,1.39Zm-.15-3c-1.15,0-2.46.18-2.46,1.3a.94.94,0,0,0,1,1,1.45,1.45,0,0,0,1.4-1,1.35,1.35,0,0,0,.06-.34Z"
           transform="translate(-267.06 -194.63)"
           id="path64" />
        <path
           class="cls-5"
           d="M498.52,238.13v7c0,.52,0,1.1.05,1.5h-.95l-.05-1h0a2.16,2.16,0,0,1-2,1.14c-1.41,0-2.49-1.19-2.49-2.95,0-1.93,1.19-3.12,2.61-3.12a1.94,1.94,0,0,1,1.75.89h0v-3.47Zm-1.06,5.08a1.68,1.68,0,0,0,0-.45,1.54,1.54,0,0,0-1.52-1.22c-1.09,0-1.74,1-1.74,2.24s.58,2.15,1.72,2.15a1.58,1.58,0,0,0,1.54-1.26,1.66,1.66,0,0,0,0-.46Z"
           transform="translate(-267.06 -194.63)"
           id="path66" />
        <path
           class="cls-5"
           d="M500.86,243.94a1.85,1.85,0,0,0,2,2,3.8,3.8,0,0,0,1.61-.3l.18.76a4.67,4.67,0,0,1-1.93.36,2.7,2.7,0,0,1-2.86-2.93c0-1.75,1-3.13,2.73-3.13a2.46,2.46,0,0,1,2.39,2.74,4.88,4.88,0,0,1,0,.49Zm3.09-.76a1.49,1.49,0,0,0-1.46-1.71,1.75,1.75,0,0,0-1.62,1.71Z"
           transform="translate(-267.06 -194.63)"
           id="path68" />
        <path
           class="cls-5"
           d="M506.28,242.41c0-.6,0-1.09,0-1.57h.93l.06,1h0a2.14,2.14,0,0,1,1.92-1.09c.81,0,2.05.48,2.05,2.47v3.47h-1.05V243.3c0-.93-.35-1.71-1.34-1.71a1.5,1.5,0,0,0-1.42,1.08,1.45,1.45,0,0,0-.07.49v3.49h-1.06Z"
           transform="translate(-267.06 -194.63)"
           id="path70" />
        <path
           class="cls-5"
           d="M486.28,261.86h-3.14v2.91h3.5v.88h-4.55v-8.09h4.37v.88h-3.32V261h3.14Z"
           transform="translate(-267.06 -194.63)"
           id="path72" />
        <path
           class="cls-5"
           d="M488,261.41c0-.6,0-1.09,0-1.57h.94l.06,1h0a2.14,2.14,0,0,1,1.92-1.09c.8,0,2,.48,2,2.47v3.47h-1V262.3c0-.93-.35-1.71-1.35-1.71a1.5,1.5,0,0,0-1.41,1.08,1.45,1.45,0,0,0-.07.49v3.49H488Z"
           transform="translate(-267.06 -194.63)"
           id="path74" />
        <path
           class="cls-5"
           d="M495.84,258.18v1.66h1.52v.81h-1.52v3.13c0,.72.21,1.12.8,1.12a2.21,2.21,0,0,0,.61-.07l0,.79a2.39,2.39,0,0,1-.93.15,1.46,1.46,0,0,1-1.14-.45,2.13,2.13,0,0,1-.41-1.51v-3.16h-.9v-.81h.9v-1.39Z"
           transform="translate(-267.06 -194.63)"
           id="path76" />
        <path
           class="cls-5"
           d="M498.54,257.13h1.06v8.52h-1.06Z"
           transform="translate(-267.06 -194.63)"
           id="path78" />
        <path
           class="cls-5"
           d="M504.59,265.65l-.08-.73h0a2.17,2.17,0,0,1-1.77.86,1.66,1.66,0,0,1-1.78-1.67c0-1.4,1.25-2.17,3.49-2.16v-.12a1.19,1.19,0,0,0-1.32-1.34,2.93,2.93,0,0,0-1.51.43l-.24-.69a3.64,3.64,0,0,1,1.91-.52c1.77,0,2.2,1.21,2.2,2.38v2.17a8.4,8.4,0,0,0,.1,1.39Zm-.16-3c-1.15,0-2.45.18-2.45,1.3a.93.93,0,0,0,1,1,1.45,1.45,0,0,0,1.41-1,1.33,1.33,0,0,0,.05-.34Z"
           transform="translate(-267.06 -194.63)"
           id="path80" />
        <path
           class="cls-5"
           d="M512.17,257.13v7c0,.52,0,1.1.05,1.5h-1l0-1h0a2.14,2.14,0,0,1-2,1.14c-1.4,0-2.48-1.19-2.48-2.95,0-1.93,1.19-3.12,2.6-3.12a1.93,1.93,0,0,1,1.75.89h0v-3.47Zm-1,5.08a1.68,1.68,0,0,0-.05-.45,1.54,1.54,0,0,0-1.52-1.22c-1.09,0-1.74,1-1.74,2.24s.57,2.15,1.71,2.15a1.59,1.59,0,0,0,1.55-1.26,1.66,1.66,0,0,0,.05-.46Z"
           transform="translate(-267.06 -194.63)"
           id="path82" />
        <path
           class="cls-5"
           d="M514.52,262.94a1.85,1.85,0,0,0,2,2,3.75,3.75,0,0,0,1.6-.3l.18.76a4.63,4.63,0,0,1-1.93.36,2.7,2.7,0,0,1-2.85-2.93c0-1.75,1-3.13,2.72-3.13a2.46,2.46,0,0,1,2.4,2.74,2.81,2.81,0,0,1,0,.49Zm3.09-.76a1.5,1.5,0,0,0-1.46-1.71,1.74,1.74,0,0,0-1.62,1.71Z"
           transform="translate(-267.06 -194.63)"
           id="path84" />
        <path
           class="cls-5"
           d="M519.94,261.41c0-.6,0-1.09-.05-1.57h.94l.06,1h0a2.14,2.14,0,0,1,1.92-1.09c.8,0,2,.48,2,2.47v3.47h-1V262.3c0-.93-.35-1.71-1.35-1.71a1.5,1.5,0,0,0-1.41,1.08,1.45,1.45,0,0,0-.07.49v3.49h-1.06Z"
           transform="translate(-267.06 -194.63)"
           id="path86" />
        <path
           class="cls-5"
           d="M482,282.13a3.68,3.68,0,0,0,1.87.52c1.07,0,1.69-.56,1.69-1.37s-.43-1.19-1.52-1.61c-1.32-.47-2.14-1.15-2.14-2.29a2.34,2.34,0,0,1,2.62-2.2,3.7,3.7,0,0,1,1.78.4l-.28.85a3.33,3.33,0,0,0-1.54-.38c-1.1,0-1.52.66-1.52,1.21,0,.75.49,1.13,1.6,1.56,1.37.52,2.07,1.18,2.07,2.37s-.93,2.33-2.83,2.33a4.21,4.21,0,0,1-2.07-.52Z"
           transform="translate(-267.06 -194.63)"
           id="path88" />
        <path
           class="cls-5"
           d="M489.21,275.93v1.66h1.51v.81h-1.51v3.13c0,.72.2,1.12.79,1.12a2.21,2.21,0,0,0,.61-.07l.05.79a2.44,2.44,0,0,1-.94.15,1.47,1.47,0,0,1-1.14-.45,2.13,2.13,0,0,1-.4-1.51V278.4h-.9v-.81h.9V276.2Z"
           transform="translate(-267.06 -194.63)"
           id="path90" />
        <path
           class="cls-5"
           d="M497.09,280.45a2.84,2.84,0,0,1-2.89,3.08,2.76,2.76,0,0,1-2.78-3,2.83,2.83,0,0,1,2.87-3.08A2.75,2.75,0,0,1,497.09,280.45Zm-4.61.06c0,1.27.74,2.23,1.77,2.23s1.76-.95,1.76-2.26c0-1-.49-2.23-1.74-2.23S492.48,279.4,492.48,280.51Zm0-4.56a.61.61,0,0,1,.61-.61.58.58,0,0,1,.59.61.6.6,0,0,1-.59.61A.61.61,0,0,1,492.53,276Zm2.23,0a.6.6,0,0,1,.6-.61.58.58,0,0,1,.59.61.6.6,0,1,1-1.19,0Z"
           transform="translate(-267.06 -194.63)"
           id="path92" />
        <path
           class="cls-5"
           d="M498.42,279.4c0-.68,0-1.27,0-1.81h.92l0,1.14h0a1.75,1.75,0,0,1,1.61-1.27,1,1,0,0,1,.3,0v1a1.86,1.86,0,0,0-.36,0,1.47,1.47,0,0,0-1.41,1.35,2.46,2.46,0,0,0,0,.49v3.1h-1.05Z"
           transform="translate(-267.06 -194.63)"
           id="path94" />
        <path
           class="cls-5"
           d="M507.21,281.82c0,.6,0,1.12,0,1.58h-.93l-.06-.95h0a2.16,2.16,0,0,1-1.91,1.08c-.92,0-2-.5-2-2.54v-3.4h1.06v3.22c0,1.1.33,1.84,1.29,1.84a1.52,1.52,0,0,0,1.39-.95,1.57,1.57,0,0,0,.1-.54v-3.57h1.06Z"
           transform="translate(-267.06 -194.63)"
           id="path96" />
        <path
           class="cls-5"
           d="M509,279.16c0-.6,0-1.09,0-1.57h.94l.06,1h0a2.14,2.14,0,0,1,1.92-1.09c.8,0,2,.48,2,2.47v3.47h-1v-3.35c0-.93-.35-1.71-1.35-1.71a1.5,1.5,0,0,0-1.41,1.08,1.45,1.45,0,0,0-.07.49v3.49H509Z"
           transform="translate(-267.06 -194.63)"
           id="path98" />
        <path
           class="cls-5"
           d="M520.62,277.59c0,.42,0,.89,0,1.6v3.37a3.35,3.35,0,0,1-.82,2.65,3.08,3.08,0,0,1-2.11.7,3.79,3.79,0,0,1-1.94-.48l.27-.81a3.25,3.25,0,0,0,1.7.46c1.08,0,1.87-.57,1.87-2v-.65h0a2.08,2.08,0,0,1-1.85,1,2.59,2.59,0,0,1-2.47-2.83,2.79,2.79,0,0,1,2.62-3.08,1.94,1.94,0,0,1,1.81,1h0l.05-.88Zm-1.09,2.29a1.47,1.47,0,0,0-.06-.48,1.52,1.52,0,0,0-1.47-1.11c-1,0-1.73.85-1.73,2.19,0,1.14.57,2.09,1.71,2.09a1.55,1.55,0,0,0,1.47-1.08,1.81,1.81,0,0,0,.08-.56Z"
           transform="translate(-267.06 -194.63)"
           id="path100" />
        <path
           class="cls-10"
           d="M516,315.38a1,1,0,0,0-1,1v12.25c0,.54-.25.62-.55.17l-8.52-12.59a2.07,2.07,0,0,0-1.54-.82h-2.24a1,1,0,0,0-1,1v20.7a1,1,0,0,0,1,1h3.06a1,1,0,0,0,1-1v-12c0-.54.25-.62.55-.17l8.38,12.31a2.1,2.1,0,0,0,1.54.82H519a1,1,0,0,0,1-1v-20.7a1,1,0,0,0-1-1Z"
           transform="translate(-267.06 -194.63)"
           id="path102" />
        <path
           class="cls-10"
           d="M481.69,316.37a1,1,0,0,1,1-1H496.9c.54,0,.76.39.49.86l-1.55,2.68a1.9,1.9,0,0,1-1.48.86H482.68a1,1,0,0,1-1-1Z"
           transform="translate(-267.06 -194.63)"
           id="path104" />
        <path
           class="cls-10"
           d="M481.69,334.65a1,1,0,0,1,1-1H496.9c.54,0,.76.38.49.85l-1.55,2.69a1.92,1.92,0,0,1-1.48.85H482.68a1,1,0,0,1-1-1Z"
           transform="translate(-267.06 -194.63)"
           id="path106" />
        <path
           class="cls-10"
           d="M481.69,325.28a1,1,0,0,1,1-1h11.76c.54,0,.76.38.49.85l-1.55,2.69a1.89,1.89,0,0,1-1.48.85h-9.22a1,1,0,0,1-1-1Z"
           transform="translate(-267.06 -194.63)"
           id="path108" />
        <path
           class="cls-10"
           d="M525.16,316.37a1,1,0,0,1,1-1h14.22c.54,0,.77.39.49.86l-1.55,2.68a1.89,1.89,0,0,1-1.47.86H526.14a1,1,0,0,1-1-1Z"
           transform="translate(-267.06 -194.63)"
           id="path110" />
        <path
           class="cls-10"
           d="M525.16,334.65a1,1,0,0,1,1-1h14.22c.54,0,.77.38.49.85l-1.55,2.69a1.9,1.9,0,0,1-1.47.85H526.14a1,1,0,0,1-1-1Z"
           transform="translate(-267.06 -194.63)"
           id="path112" />
        <path
           class="cls-10"
           d="M525.16,325.28a1,1,0,0,1,1-1H537.9c.54,0,.77.38.5.85l-1.55,2.69a1.91,1.91,0,0,1-1.48.85h-9.23a1,1,0,0,1-1-1Z"
           transform="translate(-267.06 -194.63)"
           id="path114" />
        <path
           class="cls-10"
           d="M551.4,338.06h5.24a1.92,1.92,0,0,0,1.48-.85l1.55-2.69c.27-.47.05-.85-.49-.85H553c-2.93-.11-4-1.38-4-4.19,0-1.85,0-3.68,0-6.14a3.49,3.49,0,0,1,3.64-3.56h4a1.9,1.9,0,0,0,1.48-.86l1.55-2.68c.27-.47.05-.86-.49-.86H551.6c-4.67,0-7.66,3.6-7.66,8.14V330c0,4.19,2.14,8.1,7.46,8.1"
           transform="translate(-267.06 -194.63)"
           id="path116" />
        <path
           class="cls-10"
           d="M470.7,338.06c4.21,0,6.89-2.24,6.89-5.1V329.9a4.77,4.77,0,0,0-4.24-4.89c-1.5-.32-5.46-1.11-5.47-1.11a1.67,1.67,0,0,1-1.39-1.55c0-.21,0,.33,0-.47a2,2,0,0,1,2-2.1h5.55a1.9,1.9,0,0,0,1.48-.86l1.55-2.68c.27-.47.05-.86-.49-.86h-8.11c-4.44,0-7,2.73-7,5.69v1.69a5.15,5.15,0,0,0,4.09,5.37c.4.1,5,1.11,5.56,1.21a1.65,1.65,0,0,1,1.47,1.72v.85c0,1.79-2.16,1.76-2.73,1.76h-7.39a1,1,0,0,0-1,1v2.42a1,1,0,0,0,1,1h8.24c4.21,0,6.89-2.24,6.89-5.1"
           transform="translate(-267.06 -194.63)"
           id="path118" />
        <text
           xml:space="preserve"
           style="white-space:pre;inline-size:89.4707;display:inline;fill:#000000"
           x="37.5"
           y="25"
           id="text293-9"
           font-size="smaller"
           transform="translate(-2.4892577,20.612305)"><tspan
             x="37.5"
             y="25"
             id="sysStatus">${data[0]}</tspan></text>
        <text
           xml:space="preserve"
           style="white-space:pre;inline-size:89.4707;display:inline;fill:#000000"
           x="37.5"
           y="33"
           id="text293-9-7"
           font-size="70%"
           transform="matrix(0.96223666,0,0,0.93237978,14.311055,34.917818)"><tspan
             x="37.5"
             y="33"
             id="batteryA">${data[2]} A</tspan></text>
        <text
           xml:space="preserve"
           style="white-space:pre;inline-size:89.4707;display:inline;fill:#000000"
           x="37.5"
           y="35"
           id="text293-9-0"
           font-size="70%"
           transform="matrix(0.96223666,0,0,0.93237978,14.311055,47.173995)"><tspan
             x="37.5"
             y="35"
             id="batteryV">${data[3]} V</tspan></text>
        <text
           xml:space="preserve"
           style="white-space:pre;inline-size:89.4707;display:inline;fill:#000000"
           x="37.5"
           y="38"
           id="text293-9-4"
           font-size="70%"
           transform="matrix(0.96223666,0,0,0.93237978,14.487832,58.604332)"><tspan
             x="37.5"
             y="38"
             id="batteryW">${data[4]} W</tspan></text>
        <rect
           style="fill:none;stroke:#000000"
           id="rect584"
           width="9.75"
           height="17.5"
           x="36"
           y="65" />
        <rect
           style="fill:#000000;stroke:#000000"
           id="rect586"
           width="3.5"
           height="2.25"
           x="39.05806"
           y="62" />
        <rect
           style="fill:#000000;stroke:#000000"
           id="batteryLevel"
           width="5.7981014"
           height="${14.359203/100*data[1]}"
           x="38.024757"
           y="${80.5-14.359203/100*data[1]}" />

        <g
           id="g3957"
           transform="matrix(0.64090409,0,0,0.68740704,34.288526,18.367703)">
          <circle
             style="fill:none;stroke:#000000;stroke-width:1;stroke-dasharray:none"
             id="path3808"
             cy="63.875"
             cx="109.375"
             r="5" />
          <path
             style="fill:none;stroke:#000000;stroke-width:1;stroke-dasharray:none"
             d="m 112.375,59.75 3.875,-4.375"
             id="path3824" />
          <path
             style="fill:none;stroke:#000000;stroke-width:1;stroke-dasharray:none"
             d="m 106.375,67.625 -4.25,5"
             id="path3838" />
          <path
             style="fill:none;stroke:#000000;stroke-width:1;stroke-dasharray:none"
             d="m 105.5,60.375 -4.875,-4.25"
             id="path3852" />
          <path
             style="fill:none;stroke:#000000;stroke-width:1;stroke-dasharray:none"
             d="m 113.125,67.25 4.5,4"
             id="path3866" />
          <path
             style="fill:none;stroke:#000000;stroke-width:1;stroke-dasharray:none"
             d="M 114.5,62.625 120.5,62"
             id="path3880" />
          <path
             style="fill:none;stroke:#000000;stroke-width:1;stroke-dasharray:none"
             d="M 104.125,64.125 99,64.5"
             id="path3894" />
          <path
             style="fill:none;stroke:#000000;stroke-width:1;stroke-dasharray:none"
             d="m 109.25,58.75 -0.625,-5.125"
             id="path3908" />
          <path
             style="fill:none;stroke:#000000;stroke-width:1;stroke-dasharray:none"
             d="m 109.875,68.625 0.5,4.875"
             id="path3922" />
        </g>
        <g
           id="g2049">
          <polygon
             class="cls-4"
             points="35.01,132.83 31.57,126.25 28.14,132.83 "
             id="polygon14-3-8"
             style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none"
             transform="matrix(2.0292674,0,0,1,41.108016,-58.122215)" />
          <rect
             style="fill:none;stroke:#000000;stroke-width:0.94488189;stroke-linecap:square;stroke-miterlimit:0;stroke-dasharray:none;paint-order:markers stroke fill"
             id="rect948"
             width="9.3053074"
             height="7.9303074"
             x="100.47234"
             y="74.472343" />
          <rect
             style="fill:none;stroke:#000000;stroke-linecap:square;stroke-miterlimit:0;paint-order:markers stroke fill"
             id="rect2520"
             width="2.125"
             height="3.5"
             x="104.125"
             y="78.625" />
        </g>
        <g
           id="g7471"
           transform="translate(-2)">
          <rect
             style="fill:none;stroke:#000000;stroke-width:0.945;stroke-linecap:square;stroke-miterlimit:0;stroke-dasharray:none;paint-order:markers stroke fill"
             id="rect6225"
             width="9"
             height="9"
             x="102.875"
             y="85.75" />
          <ellipse
             style="fill:none;stroke:#000000;stroke-width:0.445;stroke-linecap:square;stroke-miterlimit:0;stroke-dasharray:none;paint-order:markers stroke fill"
             id="path6301"
             cx="105.875"
             cy="90.4375"
             rx="0.375"
             ry="0.3125" />
          <ellipse
             style="fill:none;stroke:#000000;stroke-width:0.445;stroke-linecap:square;stroke-miterlimit:0;stroke-dasharray:none;paint-order:markers stroke fill"
             id="path6301-0"
             cx="108.875"
             cy="90.5"
             rx="0.375"
             ry="0.3125" />
          <circle
             style="fill:none;stroke:#000000;stroke-width:0.445;stroke-linecap:square;stroke-miterlimit:0;stroke-dasharray:none;paint-order:markers stroke fill"
             id="path6379"
             cx="107.375"
             cy="90.5"
             r="3" />
        </g>
        <text
           xml:space="preserve"
           style="white-space:pre;inline-size:89.4707;display:inline;fill:#000000"
           x="37.5"
           y="38"
           id="text293-9-43"
           font-size="70%"
           transform="matrix(0.96223666,0,0,0.93237978,80.103986,31.654488)"><tspan
             x="37.5"
             y="38"
             id="currentPV">${data[5]} W</tspan></text>
        <text
           xml:space="preserve"
           style="white-space:pre;inline-size:89.4707;display:inline;fill:#000000"
           x="37.5"
           y="37"
           id="text293-9-43-7"
           font-size="70%"
           transform="matrix(0.96223666,0,0,0.93237978,80.344545,46.106375)"><tspan
             x="37.5"
             y="37"
             id="currentHouse">${data[6]} W</tspan></text>
        <text
           xml:space="preserve"
           style="white-space:pre;inline-size:89.4707;display:inline;fill:#000000"
           x="37.5"
           y="38"
           id="text293-9-43-5"
           font-size="70%"
           transform="matrix(0.96223666,0,0,0.93237978,80.528607,59.058789)"><tspan
             x="37.5"
             y="38"
             id="currentGrid">${data[7]} W</tspan></text>
      </svg>      
      </div>
    `;

    
  } //End render


      
 
  // End Definition of SVG Elements

  setConfig(config) {
    if (!config.entities) {
      throw new Error("You need to define entities");
    }
    this.config = config;
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
    // return this.config.entities.length + 1;
    return 3
  }



  static getConfigElement(){
    return document.createElement("io-senec-card-editor");
  }

  static getStubConfig() {
    return { 
      entities: 
      [
        "sensor.senec_system_state",
        "sensor.senec_battery_charge_percent",
        "sensor.senec_battery_state_current",
        "sensor.senec_battery_state_voltage",
        "sensor.senec_battery_state_power",
        "sensor.senec_solar_generated_power",
        "sensor.senec_house_power",
        "sensor.senec_grid_state_power"
      ]
    }
  }

}
customElements.define("io-senec-card", IoSenecCard);

class IoSenecCardEditor extends LitElement {

  setConfig(config) {
    this._config = config;
  }
  

// Define a HA form with input for the entities
  render() {
     
    return html`
    <ha-form
    .hass=${this.hass}
    .data=${this._config}
    .schema=${[
      {name: "Systemstatus", selector: { entity: { domain: "sensor", integration: "senec" }}},
      {name: "Ladestand des Akkus in Prozent", selector: { entity: { domain: "sensor", integration: "senec"}}},
      {name: "Aktueller Akku Strom in Ampere", selector: { entity: { domain: "sensor", integration: "senec" } }},
      {name: "Aktuelle Akkuspannung in Volt", selector: { entity: { domain: "sensor", integration: "senec" } }},
      {name: "Aktuelle Akku Leistung in Watt", selector: { entity: { domain: "sensor", integration: "senec" } }},
      {name: "Aktuell erzeugter PV-Strom in Watt", selector: { entity: { domain: "sensor", integration: "senec" } }},
      {name: "Aktueller Hausverbrauch in Watt", selector: { entity: { domain: "sensor", integration: "senec" } }},
      {name: "Aktuelle Netz Leistung in Watt", selector: { entity: { domain: "sensor", integration: "senec" } }},
    ]}
    .computeLabel=${this._computeLabel}
    @value-changed=${this._valueChanged} 
    ></ha-form>
    `;
  }

  _valueChanged(ev) {
    console.log(ev)
    if (!this._config || !this.hass) {
      return;
    }
    const _config = Object.assign({}, this._config);
    _config.entities = [
                        ev.detail.value["Systemstatus"],
                        ev.detail.value["Ladestand des Akkus in Prozent"],
                        ev.detail.value["Aktueller Akku Strom in Ampere"],
                        ev.detail.value["Aktuelle Akkuspannung in Volt"],
                        ev.detail.value["Aktuelle Akku Leistung in Watt"],
                        ev.detail.value["Aktuell erzeugter PV-Strom in Watt"],
                        ev.detail.value["Aktueller Hausverbrauch in Watt"],
                        ev.detail.value["Aktuelle Netz Leistung in Watt"],
                        ];

    this._config = _config;

    const event = new CustomEvent("config-changed", {
      detail: { config: _config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

}

customElements.define("io-senec-card-editor", IoSenecCardEditor);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "io-senec-card",
  name: "SENEC Display",
  preview: true, // Optional - defaults to false
  description: "Show the display of your SENEC device ", // Optional
  documentationURL: "https://github.com/io-debug/io-senec-card", // Adds a help link in the frontend card editor
});

//https://community.home-assistant.io/t/custom-cards-with-gui-editor-as-of-2023/542254/8


