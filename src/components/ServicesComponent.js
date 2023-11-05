const ServicesComponent = () => {
  return (
    <section id="services">
      {/* Dividers */}
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider top_divider"
      />
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider bottom_divider"
      />
      {/* !Dividers */}
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">
            Warum MyPinball die beste Wahl für Flipperautomaten-Miete ist?
          </h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Services */}
        <div className="neoh_fn_services">
          <ul>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>01</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Breite Produktauswahl</h3>
                  <p className="fn_desc fn_animated_text">
                    MyPinball bietet eine große Auswahl an Flipperautomaten,
                    Arcade-Spielen, Löwen E-Darts und Greifautomaten.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>02</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Qualitätsgeräte und Wartung</h3>
                  <p className="fn_desc fn_animated_text">
                    Jede Maschine wird regelmäßig gewartet, um technische
                    Probleme zu vermeiden.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>03</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Flexible Mietoptionen</h3>
                  <p className="fn_desc fn_animated_text">
                    MyPinball bietet flexible Mietzeiträume, sei es täglich,
                    wöchentlich oder monatlich.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>04</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Lieferung und Aufstellung</h3>
                  <p className="fn_desc fn_animated_text">
                    Unsere Profis liefern und richten die Geräte an Ihrem
                    Wunschort ein.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* !Services */}
      </div>
    </section>
  );
};
export default ServicesComponent;
