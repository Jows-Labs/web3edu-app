import Kyc1 from "./Kyc1";
import Kyc2 from "./Kyc2";
import KycIntro from "./KycIntro";

function KnowLedge() {
  return (
    <div className="flex items-center justify-center ">
      <KycIntro />
      
      <Kyc1 />

      <Kyc2 />
    </div>
  );
}

export default KnowLedge;
