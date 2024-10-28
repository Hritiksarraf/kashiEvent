import React from "react";

const imageUrls = [
  {
    imgUrl:
      "https://res.cloudinary.com/hritiksarraf/image/upload/v1730054487/44_wxw2dp.jpg",
  },
 
  {
    imgUrl:
      "https://res.cloudinary.com/hritiksarraf/image/upload/v1730054511/62_bj5kvw.jpg",
  },
  
  {
    imgUrl:
      "https://res.cloudinary.com/hritiksarraf/image/upload/v1730064839/08_ju471z.jpg",
  },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139906/01_vbsigo.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139904/02_bqhgdi.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139902/03_b9af59.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139901/04_mzyksd.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139901/05_gppj01.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139901/07_kamejs.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139900/06_yjt9dl.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139899/09_xenxyi.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139898/10_qoynbw.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139896/08_cwzwkr.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139896/08_iyrpgs.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139896/11_ec2cbu.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139895/12_d4vwzp.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139894/15_lnbms5.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139894/14_ht7czu.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139893/16_ukwcmg.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139892/17_qh4ght.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139889/20_kegq1k.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139883/30_wgk28f.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139883/30_wgk28f.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139882/29_g8qpez.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139880/32_a7bqpu.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139879/31_t3kpn4.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139874/41_quwnxn.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139874/38_eohfcz.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139873/42_fzghvx.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139872/43_eqnxuy.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139870/44_d2ak88.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139867/49_fhfzyn.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139867/50_jstix5.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139865/51_a7w4dp.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139862/55_rxutiw.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139860/58_tcgo6w.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139860/57_doab6s.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139856/61_lap7tc.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139856/63_pnapxh.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139856/62_exim8p.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139855/64_juwudo.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139854/66_jpulp4.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139854/65_mqgw3h.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139852/67_ajxj9u.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139852/68_kkpadb.jpg" },

  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139848/69_ylbysm.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139843/78_tpzuul.jpg" },
  { imgUrl: "corhttps://res.cloudinary.com/dun3dkqst/image/upload/v1730139843/75_ysqqpp.jpgporate" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139843/77_hafz75.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139843/79_gqyfzt.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139840/81_varr3p.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139840/82_g1q9mi.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139840/83_rg50o3.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139840/80_r6qyqd.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139839/84_vdafsi.jpg" },
  { imgUrl: "https://res.cloudinary.com/dun3dkqst/image/upload/v1730139839/85_ts51lr.jpg" },
];

export default function Gallery2() {
  return (
    <div className="flex flex-wrap justify-center gap-4 ">
      <div className="text-yellow-900  text-center pt-4 ">
        <p className="text-4xl lg:text-6xl md:block ">
          Marriage memories collection!!
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 pb-10">
        {imageUrls.map((image, index) => (
          <img
            key={index}
            src={image.imgUrl}
            alt={`Gallery  ${index + 1}`}
            className="rounded-md shadow-md w-[90vw] object-cover md:w-[25vw] transition-transform transform hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
}
