import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ResearchCertificates() {
  return (
    <section id="research-certificates" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12">

  {/* RESEARCH */}
<div
  id="research"
  className="md:border-r border-gray-200 md:pr-10"
>

  <h2 className="text-xl font-bold text-blue-900 uppercase mb-8">
    Research
  </h2>


  <div className="grid grid-cols-2 gap-5">

    {/* Research 1 */}
    <div className="group">
      <Image
        src="/images/research/fuzzyflood.png"
        alt="FuzzyFlood"
        width={250}
        height={160}
        className="rounded-lg border w-full aspect-video object-cover group-hover:scale-105 transition"
      />

      <h3 className="font-semibold text-sm mt-4">
        FuzzyFlood
      </h3>

      <p className="text-xs text-gray-500 mt-2">
        Comparative Evaluation of Fuzzy Inference System Models for Flood Vulnerability
      </p>

      <p className="text-xs text-blue-700 mt-2">
        Mamdani • Sugeno • Tsukamoto • AHP
      </p>
    </div>


    {/* Research 2 */}
    <div className="group">

      <Image
        src="/images/research/yolo.png"
        alt="YOLO Research"
        width={250}
        height={160}
        className="rounded-lg border w-full aspect-video object-cover group-hover:scale-105 transition"
      />

      <h3 className="font-semibold text-sm mt-4">
        YOLOv8 Vehicle Detection
      </h3>

      <p className="text-xs text-gray-500 mt-2">
        Computer Vision, Object Detection,
        ByteTrack
      </p>

      <p className="text-xs text-blue-700 mt-2">
        YOLOv8 • OpenCV
      </p>

    </div>

  </div>


  <button className="mt-8 flex items-center gap-2 px-5 py-2 border rounded-lg text-blue-700 border-blue-300">
    Read More
    <ArrowRight size={16}/>
  </button>

</div>



          {/* CERTIFICATES */}
          <div
            id="certificates"
          >

            <h2 className="text-xl font-bold text-blue-900 uppercase mb-8">
              Certificates
            </h2>


            <div className="grid grid-cols-2 gap-5">

              <Image
                src="/images/certificates/cert1.png"
                alt="Certificate 1"
                width={250}
                height={160}
                className="rounded-lg border"
              />


              <Image
                src="/images/certificates/cert2.png"
                alt="Certificate 2"
                width={250}
                height={160}
                className="rounded-lg border"
              />


            </div>


            <button className="mt-8 flex items-center gap-2 px-5 py-2 border rounded-lg text-blue-700 border-blue-300">
              View All Certificates
              <ArrowRight size={16}/>
            </button>


          </div>


        </div>

      </div>
    </section>
  );
}