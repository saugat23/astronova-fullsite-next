"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Toaster, toast } from "sonner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Quiz1Over from "../../../../public/evaluation/quiz1over.png";
import Image from "next/image";

function Quiz2() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    quiz2q1: "",
    quiz2q2: "",
    quiz2q3: "",
  });

  useEffect(() => {
    const quiz1Token = Cookies.get("token_quiz1");

    if (!quiz1Token) {
      router.push("/evaluation/quiz1");
    }

    const video2 = document.getElementById("quizVideo2");
    const quiz2 = document.getElementById("quiz2");
    video2 &&
      video2.addEventListener("ended", function(e) {
        video2.classList.add("hidden");
        quiz2.classList.remove("hidden");
      });
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (
      formData.quiz2q1 === "४-८" &&
      formData.quiz2q2 === "प्राबिधिक तथा व्यावसायिक शिक्षा" &&
      formData.quiz2q3 === "बैशाख ९"
    ) {
      toast.success("Quiz Passsed!!!");
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - 1);
      let yesterday = currentDate;
      Cookies.set("token_quiz1", "", { expires: yesterday }); // removing the token by setting expiry date to past date
    } else {
      toast.error("Quiz Failed!!! Please Try Again!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Toaster richColors position="top-right" />
      <section className="h-auto w-full overflow-hidden bg-[#F5F5F5]">
        <div className="flex flex-col items-start justify-center space-y-6 p-6">
          <div className="flex w-full items-center justify-start bg-transparent font-poppins text-lg font-medium md:text-xl lg:text-2xl 2xl:text-3xl">
            <FaArrowLeft className="mr-2 inline" />
            Test your IQ with Quiz
          </div>
          <div className="h-auto w-full rounded-lg bg-white p-8">
            <video controls width="800" id="quizVideo2" className="">
              <source
                src="https://526408bbc3a861b513997e583d188e26.cdn.bubble.io/f1713358886413x138121815778662340/lec_part_2.mp4"
                type="video/mp4"
              />
            </video>

            <div className="hidden" id="quiz2">
              <div className="flex w-[800px] flex-col items-start justify-center space-y-8">
                <div className="w-full">
                  <Image
                    src={Quiz1Over}
                    alt="Quiz1 Over"
                    className="h-auto w-full"
                  />
                </div>
                <form
                  method="POST"
                  onSubmit={handleSubmit}
                  className="flex w-full flex-col space-y-6 font-normal"
                >
                  <div className="flex flex-col items-start justify-center space-y-2">
                    <label htmlFor="quiz2q1">
                      विद्यार्थीको उमेर अनुसार उनिहरूको रुचि र क्षमतामा काम
                      गर्ने उद्देश्यले संचालनमा ल्याईएको &quot;Book Free
                      Friday&quot; अन्तर्गत विद्यार्थीको पृथक चरित्र बिकासमा
                      ध्यान दिन &quot;Creative Learning&quot; भनेर कुन कक्षा
                      समुहका विद्यार्थीलाई परिभाषित गरिएको छ ?
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="०-३"
                        name="quiz2q1"
                        value="०-३"
                        className="inline"
                        onChange={handleChange}
                      />
                      <label htmlFor="०-३">०-३</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="४-८"
                        name="quiz2q1"
                        value="४-८"
                        className="inline"
                        onChange={handleChange}
                      />
                      <label htmlFor="४-८">४-८</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="९-१०"
                        name="quiz2q1"
                        value="९-१०"
                        className="inline"
                        onChange={handleChange}
                      />
                      <label htmlFor="९-१०">९-१०</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="११-१२"
                        name="quiz2q1"
                        value="११-१२"
                        className="inline"
                        onChange={handleChange}
                      />
                      <label htmlFor="११-१२">११-१२</label>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center space-y-2">
                    <label htmlFor="quiz2q2">
                      कक्षा Book Free Friday अन्तर्गत कक्षा ९-१० सम्मका
                      विद्यार्थीलाई कुन कार्यक्रम संचालन ल्याईएको छ ?
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="एकीकृत शिक्षा प्रणाली"
                        name="quiz2q2"
                        value="एकीकृत शिक्षा प्रणाली"
                        className="inline"
                        onChange={handleChange}
                      />
                      <label htmlFor="एकीकृत शिक्षा प्रणाली">
                        एकीकृत शिक्षा प्रणाली
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="प्राबिधिक तथा व्यावसायिक शिक्षा"
                        name="quiz2q2"
                        value="प्राबिधिक तथा व्यावसायिक शिक्षा"
                        className="inline"
                        onChange={handleChange}
                      />
                      <label htmlFor="प्राबिधिक तथा व्यावसायिक शिक्षा">
                        प्राबिधिक तथा व्यावसायिक शिक्षा
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="सीप तथा आयमुलक शिक्षा"
                        name="quiz2q2"
                        value="सीप तथा आयमुलक शिक्षा"
                        className="inline"
                        onChange={handleChange}
                      />
                      <label htmlFor="सीप तथा आयमुलक शिक्षा">
                        सीप तथा आयमुलक शिक्षा
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="रचनात्मक तथा सृजनशिल शिक्षा"
                        name="quiz2q2"
                        value="रचनात्मक तथा सृजनशिल शिक्षा"
                        className="inline"
                        onChange={handleChange}
                      />
                      <label htmlFor="रचनात्मक तथा सृजनशिल शिक्षा">
                        रचनात्मक तथा सृजनशिल शिक्षा
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center space-y-2">
                    <label htmlFor="quiz2q3">
                      महानगरमा यो शैक्षिकसत्रमा कुन मिति देखि विद्यालय संचालनमा
                      आउदै छ ?
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="बैशाख ३"
                        name="quiz2q3"
                        value="बैशाख ३"
                        className="inline"
                        onChange={handleChange}
                      />
                      <label htmlFor="बैशाख ३">बैशाख ३</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="बैशख ६"
                        name="quiz2q3"
                        value="बैशख ६"
                        className="inline"
                        onChange={handleChange}
                      />
                      <label htmlFor="बैशख ६">बैशख ६</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="बैशाख ९"
                        name="quiz2q3"
                        value="बैशाख ९"
                        className="inline"
                        onChange={handleChange}
                      />
                      <label htmlFor="बैशाख ९">बैशाख ९</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="बैशाख १५"
                        name="quiz2q3"
                        value="बैशाख १५"
                        className="inline"
                        onChange={handleChange}
                      />
                      <label htmlFor="बैशाख १५">बैशाख १५</label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="self-end rounded-lg bg-[#0205D3] px-9 py-3 font-semibold text-white hover:bg-[#3235db]"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Quiz2;
