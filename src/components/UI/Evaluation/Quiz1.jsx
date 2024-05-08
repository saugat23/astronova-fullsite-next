"use client";
import React, {useState, useEffect} from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import {Toaster, toast} from "sonner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

function Quiz1() {
  const router = useRouter();

  const[formData, setFormData] = useState({
    quiz1q1: "",
    quiz1q2: "",
    quiz1q3: "",
  });
  
  useEffect(() => {
    const video1 = document.getElementById("quizVideo1");
    const quiz1 = document.getElementById("quiz1");
    video1 &&
      video1.addEventListener("ended", function (e) {
        video1.classList.add("hidden");
        quiz1.classList.remove("hidden");
      });
  },[])

  function handleSubmit(e) {
    e.preventDefault();
    if (
      formData.quiz1q1 === '८९' &&
      formData.quiz1q2 === 'सुदम प्रसाद गौतम' &&
      formData.quiz1q3 === '१७० वर्ष'
    ) {
      toast.success('Quiz Passsed!!! On to the next Part!');
      
      const quizToken = 'quiz1solved';
      Cookies.set('token_quiz1', quizToken, { expires: 1 });

      setTimeout(() => {
        router.push('/evaluation/quiz2'); 
      },2000)
    } else {
      toast.error('Quiz Failed!!! Please Try Again!');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }

  function handleChange(e){
    setFormData({...formData, [e.target.name] : e.target.value })
  };

  return (
    <>
    <Toaster richColors position="top-right" />
    <section className="h-auto overflow-hidden bg-[#F5F5F5] w-full">
      <div className="flex flex-col justify-center items-start space-y-6 p-6">
        <div className="flex justify-start items-center bg-transparent font-poppins font-medium w-full 2xl:text-3xl lg:text-2xl md:text-xl text-lg">
          <FaArrowLeft className="inline mr-2" />
          Test your IQ with Quiz
        </div>
        <div className="bg-white w-full h-auto p-8 rounded-lg">
          <video controls width="800" id="quizVideo1" className="">
            <source
              src="https://526408bbc3a861b513997e583d188e26.cdn.bubble.io/f1713358853559x584668310715379400/lec_part_1.mp4"
              type="video/mp4"
            />
          </video>

          <div className="hidden" id="quiz1">
            <div className="flex flex-col justify-center items-start space-y-8 w-[800px]">
              <div className="w-full">
                <img
                  src="/evaluation/quiz1over.png"
                  alt="Quiz1 Over"
                  className="w-full h-auto"
                />
              </div>
              <form
                method="POST"
                onSubmit={handleSubmit}
                className="font-normal flex flex-col space-y-6 w-full"
              >
                <div className="flex flex-col justify-center items-start space-y-2">
                  <label htmlFor="quiz1q1">
                    काठमाडौं महानगरपालिकामा कतिवटा सामुदायिक विद्यालयहरू छन ?
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="७९"
                      name="quiz1q1"
                      value="७९"
                      className="inline"
                      onChange={handleChange}
                    />
                    <label htmlFor="७९">७९</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="८९"
                      name="quiz1q1"
                      value="८९"
                      className="inline"
                      onChange={handleChange}
                    />
                    <label htmlFor="८९">८९</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="९९"
                      name="quiz1q1"
                      value="९९"
                      className="inline"
                      onChange={handleChange}
                    />
                    <label htmlFor="९९">९९</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="१७०"
                      name="quiz1q1"
                      value="१७०"
                      className="inline"
                      onChange={handleChange}
                    />
                    <label htmlFor="१७०">१७०</label>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start space-y-2">
                  <label htmlFor="quiz1q2">
                    हालको दरबार हाईस्कुलको प्रधानाध्यापकको नाम के हो ?
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="सुदम प्रसाद गौतम"
                      name="quiz1q2"
                      value="सुदम प्रसाद गौतम"
                      className="inline"
                      onChange={handleChange}
                    />
                    <label htmlFor="सुदम प्रसाद गौतम">सुदम प्रसाद गौतम</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="अंकुर प्रसाद चौलागाईं"
                      name="quiz1q2"
                      value="अंकुर प्रसाद चौलागाईं"
                      className="inline"
                      onChange={handleChange}
                    />
                    <label htmlFor="अंकुर प्रसाद चौलागाईं">अंकुर प्रसाद चौलागाईं</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="प्रेम बस्नेत"
                      name="quiz1q2"
                      value="प्रेम बस्नेत"
                      className="inline"
                      onChange={handleChange}
                    />
                    <label htmlFor="प्रेम बस्नेत">प्रेम बस्नेत</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="साहिल कुमार श्रेष्ठ"
                      name="quiz1q2"
                      value="साहिल कुमार श्रेष्ठ"
                      className="inline"
                      onChange={handleChange}
                    />
                    <label htmlFor="साहिल कुमार श्रेष्ठ">साहिल कुमार श्रेष्ठ</label>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start space-y-2">
                  <label htmlFor="quiz1q3">
                    दरबार हाईस्कुल आजभन्दा कति वर्ष अघि स्थापना भएको थियो ?
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="७० वर्ष"
                      name="quiz1q3"
                      value="७० वर्ष"
                      className="inline"
                      onChange={handleChange}
                    />
                    <label htmlFor="७० वर्ष">७० वर्ष</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="९० वर्ष"
                      name="quiz1q3"
                      value="९० वर्ष"
                      className="inline"
                      onChange={handleChange}
                    />
                    <label htmlFor="९० वर्ष">९० वर्ष</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="१५० वर्ष"
                      name="quiz1q3"
                      value="१५० वर्ष"
                      className="inline"
                      onChange={handleChange}
                    />
                    <label htmlFor="१५० वर्ष">१५० वर्ष</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="१७० वर्ष"
                      name="quiz1q3"
                      value="१७० वर्ष"
                      className="inline"
                      onChange={handleChange}
                    />
                    <label htmlFor="१७० वर्ष">१७० वर्ष</label>
                  </div>
                </div>
                <button type="submit" className="bg-[#0205D3] text-white font-semibold hover:bg-[#3235db] py-3 px-9 rounded-lg self-end ">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Quiz1;
