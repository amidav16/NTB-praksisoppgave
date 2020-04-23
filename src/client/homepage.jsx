import React, { Component } from "react";
import Popup from "./popupgraph.jsx";

class HomePage extends Component {
  state = {};

  render() {
    //images, i initially planned to use webpack with local images but couldnt resolve the issue
    const Deathtoll =
      "https://cdn.discordapp.com/attachments/570647896190353433/702513944937627729/deathtoll.jpg";
    const perNorge =
      "https://cdn.discordapp.com/attachments/570647896190353433/702513950532698112/perNorge.jpg";
    const perNordmenn =
      "https://cdn.discordapp.com/attachments/570647896190353433/702513947307409529/perNordmenn.jpg";

    return (
      <div className="container">
        <h1 className="barSpace">
          Antall koronadøde i Norge mer enn doblet i løpet av påsken
        </h1>
        <div className="shortSpace">NTB-Marius Helge Larsen</div>
        <b>
          <p className="shortSpace">
            Siden palmesøndag har antall meldte koronadødsfall økt fra 62 til
            134 i Norge. Sju av ti døde den siste uken var beboere på sykehjem.
          </p>
        </b>
        <hr></hr>
        <p>
          De siste dagene har antall innlagte på sykehus med covid-19-smitte
          falt jevnt. Mandag 2. påskedag var det 204 innlagte mot 314 en uke
          før.
        </p>

        <Popup image={perNorge} first="true"></Popup>
        <Popup image={perNordmenn} second="true"></Popup>
        <p>
          Men samtidig har tallet på nye dødsfall blant covid-19-smittede holdt
          seg relativt høyt. I løpet av den drøye uken fra palmesøndag (5.
          april) og til 2. påskedag (mandag) har det blitt rapportert om åtte
          dødsfall daglig i snitt. Det viser tall NTB har hentet inn fra
          kommuner og sykehus.
        </p>
        <p>
          Covid-19 assosierte dødsfall varslet til Folkehelseinstituttet, etter
          aldersgrupper og kjønn, per 21.04.2020 kl.08.00
        </p>

        <b className="shortSpace">
          <p className="shortSpace">Flere dør på sykehjem</p>
        </b>
        <p className="shortSpace">
          En trend som har pekt seg ut de siste dagene, er at det meldes om
          stadig flere dødsfall på sykehjem og blant sykehjemsbeboere.
        </p>
        <p>
          – I en situasjon der det fortsatt er koronasmitte på flere sykehjem i
          Norge vil vi dessverre kunne få flere dødsfall blant denne gruppen i
          tiden fremover. De fleste sykehjemsbeboere er svært gamle og har
          alvorlige underliggende sykdommer. Derfor er de langt mer sårbare for
          covid-19-sykdom enn andre, sier assisterende helsedirektør Espen
          Rostrup Nakstad til NTB.
        </p>
        <b className="shortSpace">
          <p className="shortSpace">Covid-19 assosierte dødsfall</p>
        </b>
        <Popup image={Deathtoll} third="true"></Popup>
        <p>
          Til sammenligning var det i snitt 2,6 koronarelaterte dødsfall daglig
          fra det første meldte koronadødsfallet 12. mars og fram til og med
          lørdag 4. april.
        </p>
        <p>
          Fram til lørdag 4. april kom rundt halvparten av rapportene om døde
          koronasmittede fra sykehjem, mens resten kom fra sykehus. Blant de 72
          nye dødsfallene som er meldt i løpet av påskehøytiden, stammer sju av
          ti fra sykehjem. 1. påskedag gjaldt åtte av ni nye koronadødsfall
          beboere på sykehjem, mens det 2. påskedag var fem av seks.
        </p>
      </div>
    );
  }
}

export default HomePage;
