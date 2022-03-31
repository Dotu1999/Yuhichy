import * as React from "react";
import imgLink from "../../Image/Picture6.png";
import imgLink1 from "../../Image/Picture7.png";
import imgLink2 from "../../Image/Picture5.png";
export const AboutUs = () => {
  return (
    <div className="aboutUs row">
      <div className="col-md-9 col=lg-9 aboutUsContent">
        <p>
          <strong>YUHICHY</strong> is a trusted companion to foreign direct
          investment (FDI) enterprises in Vietnam that clears, ships, and
          delivers cargoes between the S-shaped country and the world. 
          <b>YUHICHY</b> is the easiest “Made in Vietnam” way to smooth out and
          flexible the process.
        </p>
        {/* <br /> */}
        <p>
          Following that slogan, we guarantee our customers’ satisfaction by
          meeting all demands of clients at highest speed and the most
          competitive rate, offer our customers modern, integrated logistics
          solutions basing on our experiences, our hard working and our
          infrastructure.
        </p>
        {/* <br /> */}
        <p>
          We cover most fields of freight and logistics industries. Our services
          which are based on a supplementary chain of management consists of:
        </p>
        <p>
          <ul class="list-group">
            <li>Domestics Sea, river freight and oversea;</li>
            <li>Air freight domestics and oversea;</li>
            <li>Express service</li>
            <li>Custom brokerage and trucking</li>
            <li>Cross border service</li>
            <li>Warehouse system</li>
            <li>Container depot and SOC service.</li>
          </ul>
        </p>
        <p>
          Besides logistics field,<b>YUHICHY</b> are joining to trading field of
          commercial cargoes,<b>YUHICHY</b> can provide entrusted import and
          export services for many kinds of cargoes and we are welcome all
          precious opportunities to cooperate in commercial trading.
        </p>
        <p>
          Our initials: “YUHICHY”, are taken from the Chinese transliteration:
          "Yuehai Chaoyang", in Vietnamese is “Việt Hải Triều Dương”, which
          means "Crossing the East Sea towards the Sun".
        </p>
        <p>
          The stylized image of the bird having the name of "LẠC" - the
          Vietnamese mascot is integrated with the sea waves. Above it is the
          Chinese word that means "Passing", this image is represented for a
          boat on the sea. The orange part represented for the Sun.
        </p>
        <p>
          The Vietnam boat crossed the great sea towards the Sun – “VIỆT HẢI
          TRIỀU DƯƠNG”
        </p>
      </div>
      <div className="col-md-3 col=lg-3">
        <img
          style={{ width: "100%", borderRadius: "5px", marginBottom: "20px" }}
          src={imgLink}
        />
        <br />
        <img
          style={{ width: "100%", borderRadius: "5px", marginBottom: "20px" }}
          src={imgLink1}
        />
        <img
          style={{ width: "100%", borderRadius: "5px", marginBottom: "20px" }}
          src={imgLink2}
        />
      </div>
    </div>
  );
};
