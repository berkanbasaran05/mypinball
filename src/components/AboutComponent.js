// eslint-disable-next-line react/no-unescaped-entities
import Link from "next/link";
import {
  EnvelopeIcon,
  MapIcon,
  PhoneIcon,
  TicketIcon,
  TvIcon,
} from "@heroicons/react/24/outline";
const AboutComponent = () => {
  return (
    <section id="about" className="">
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/about/1.jpg" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">The Flintstones</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc text-xs">
              <p>
                Tauchen Sie in die Abenteuer von Fred und Wilma Feuerstein,
                Barney Bubble und Bamm Bamm Rubble ein. Der Flipper hat einen
                sehr innovativen Aufbau und ist bestens für Familien geeignet.
                Darunter sind eine Riesenschlange (der Bronto-Crane), die
                Flintstones- Häusersiedlung, ein Bowlingcenter und eine
                rotierende „Rock Slicer“ Maschine, die die Kugeln zunächst
                sammelt und dann zum Multiball freigibt. Der Flintstones ist ein
                sogenannter DMD (Dot Matrix Display), worüber sehr viele
                humorvolle Animationen wiedergegeben werden. Das „Bowl O Rama“
                ist eine eingebaute Bowlingbahn, bei der man je nach
                Treffgenauigkeit einen Strike, Spare oder entsprechend Punkte
                erreichen kann. Eine besondere Sache ist noch die automatische
                Umschaltung der Ballführung beim Treffen der Rampen. Man bekommt
                den Ball als Vorlage wieder auf die gleiche Seite zurück und
                kann so bequem Folgetreffer setzen. Es gibt insgesamt 5 Modes,
                die zu erspielen sind und spezielle Spielvarianten auslösen. Das
                „Dino’s Frenzy“ , „Bedroom Water Buffalos“ , „Joe’s Diner“ ,
                „Fred’s Choice“ und das fulminante Finale. Der allseits bekannte
                Song Meet the Flintstones ist in Originalversion enthalten und
                bringt gute Laune. Ausgestattet ist das Gerät mit dem neuen DCM
                Soundmodul, welches einen wesentlich besseren Sound und Qualität
                erzeugt, als die Geräte vor Baujahr 1995.
              </p>
              <p>
                The artwork has been hand-drawned by Robert Green in the
                traditional anime style and composited by Layla Efiyo.
              </p>
            </div>
            <div className="buttons items-center">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <TicketIcon className="w-6 h-6 text-white" />
                </span>
                <span className="text">Mieten</span>
              </a>
              <span className=" text-brand-turquoise-primary ">
                {" "}
                mieten ab € 160{" "}
              </span>
            </div>
          </div>
        </div>
        {/* !About Item #1 */}
        {/* About Item #2 */}
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img src="img/about/2.jpg" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Theatre of Magic</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Theatre of Magic (TOM) ist ein im März 1995 von Bally
                hergestellter Flipper. Dieses Spiel wurde von John Popadiuk
                designt und umfasst zahlreiche seiner grundlegenden
                Designelemente wie z.B. die Magnete, ein Bash-Spielzeug sowie
                anspruchsvollere Rampen. Magie ist das Thema von Theatre of
                Magic, dessen Ziel im Ausführen von acht Tricks und danach dem
                Spielen einer sehr einfachen Gehilfenrolle besteht.
              </p>
              <p>
                Das bemerkenswerteste Element dieses Spiels ist die magische
                Kiste namens `The Magic Trunk`, die für die Aktivierung
                verschiedener Spielmodes eine sehr wichtige Rolle spielt. Auf
                dem Spielfeld befindet sich mehre Elektromagneten welche das
                Spiel auf magische Art und Weise beeinflussen.
              </p>
            </div>
            <div className="buttons">
              <Link href="/">
                <a className="neoh_fn_button only_text">
                  <span className="text">More About US</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* !About Item #2 */}
      </div>
    </section>
  );
};
export default AboutComponent;
