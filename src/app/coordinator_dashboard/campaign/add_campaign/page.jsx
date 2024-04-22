"use client";
import React, {useState, useEffect} from "react";
import { Input, Textarea } from "@nextui-org/react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { createCampaign } from "../../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { storage } from "@/app/firebase";
import Link from "next/link";

const Page = () => {

  const [imagefeatureUpload, setImagefeatureUpload] = useState(null);
    const [imagegalleryUpload1, setImagegalleryUpload1] = useState(null);
    const [imagegalleryUpload2, setImagegalleryUpload2] = useState(null);
    const [imagegalleryUpload3, setImagegalleryUpload3] = useState(null);
    const [imagegalleryUpload4, setImagegalleryUpload4] = useState(null);
    const [videoUpload, setVideoUpload] = useState(null);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
      coordinator_id: 12,
      title: '',
      short_description: '',
      department: '',
      target_fund_dollars: null,
      target_fund_rupees: null,
      start_date: '',
      end_date: '',
      long_description: '',
      featured_image: '',
      gallery_images: [],
      video: '', 
  });

  useEffect(() => {
    const uploadFile = async (file, fileType) => {
      if (!file) return;

      const fileRef = ref(storage, `campaign/${file.name}`);

      try {
        await uploadBytes(fileRef, file);
        const url = await getDownloadURL(fileRef);

        setFormData((prevData) => ({
          ...prevData,
          [fileType]: url,
        }));
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    };

    uploadFile(imagefeatureUpload, "featured_image");
    uploadFile(videoUpload, "video");
  }, [imagefeatureUpload, videoUpload]);

  const uploadFilegallery1 = (e) => {
    e.preventDefault();
    if (!imagegalleryUpload1) return;

    const imageRef = ref(storage, `campaign/${imagegalleryUpload1.name}`);

    uploadBytes(imageRef, imagegalleryUpload1).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        setFormData((prevData) => ({
          ...prevData,
          gallery_images: [...prevData.gallery_images, url],
        }));
      });
    });
  };
  const uploadFilegallery2 = (e) => {
    e.preventDefault();
    if (!imagegalleryUpload2) return;

    const imageRef = ref(storage, `campaign/${imagegalleryUpload2.name}`);

    uploadBytes(imageRef, imagegalleryUpload2).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        setFormData((prevData) => ({
          ...prevData,
          gallery_images: [...prevData.gallery_images, url],
        }));
      });
    });
  };
  const uploadFilegallery3 = (e) => {
    e.preventDefault();
    if (!imagegalleryUpload3) return;

    const imageRef = ref(storage, `campaign/${imagegalleryUpload3.name}`);

    uploadBytes(imageRef, imagegalleryUpload3).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        setFormData((prevData) => ({
          ...prevData,
          gallery_images: [...prevData.gallery_images, url],
        }));
      });
    });
  };
  const uploadFilegallery4 = (e) => {
    e.preventDefault();
    if (!imagegalleryUpload4) return;

    // const imageRef = ref(storage, `campaign/${imagegalleryUpload4.name}`);

    // uploadBytes(imageRef, imagegalleryUpload4).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     console.log(url);
    //     setFormData((prevData) => ({
    //       ...prevData,
    //       gallery_images: [...prevData.gallery_images, url],
    //     }));
    //   });
    // });
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(formData);
      const response = await createCampaign(formData);
      console.log("response", response);

      toast.success("Campaign created successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
      });
      setTimeout(() => {
        window.history.back();
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error creating campaign. Please try again!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
      });
    } finally {
      setLoading(false);
    }
  };

  const router = useRouter();
  return (
    <section className="p-6 h-auto">
      <div className="bg-white w-full flex items-start shadow-xl p-4 border border-[#e0d8ff99] rounded-lg">
        <div className="w-[20%] justify-self-start border border-[#e0d8ff99] rounded-s-lg flex flex-col justify-center items-start space-y-4 p-3">
          <div>
            <h3 className="font-poppins font-semibold lg:text-xl">
              Basic Information
            </h3>
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3 lg:py-4">
            <label
              htmlFor="campaignTitle"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Campaign&apos;s Title
            </label>
            <input
              type="text"
              name="campaignTitle"
              id="campaignTitle"
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-[#0000008c] text-sm w-full"
              placeholder="Campaign's Title"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="campaignSubTitle"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Campaign&apos;s Sub Title
            </label>
            <textarea
              name="campaignTitle"
              id="campaignTitle"
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-[#0000008c] text-sm w-full resize-none h-20"
              placeholder="Campaign's Sub Title"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="campaignVideo"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Campaign&apos;s Video
            </label>
            <input
              type="text"
              name="campaignVideo"
              id="campaignVideo"
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-sm w-full text-[#0000008c]"
              placeholder="URL"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="campaignDepartment"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              For Department
            </label>
            <select
              type="text"
              name="campaignVideo"
              id="campaignVideo"
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-sm w-full text-[#0000008c]"
              placeholder="URL"
            >
              <option value="subsidiaries">Subsidiaries</option>
              <option value="innovation">Innovation</option>
              <option value="infrastructure">Infrastructure</option>
            </select>
          </div>
        </div>
        <div className="grow justify-self-center flex flex-col justify-center items-start lg:space-y-4 p-6">
          <div>
            <h3 className="font-poppins font-semibold lg:text-xl">
              Funding Information
            </h3>
          </div>
          <div className="w-[80%] flex flex-col justify-center items-start space-y-4">
            <div className="border-dashed border-[#e0d8ff99] w-full h-60 py-6">
              <label
                htmlFor="campaignFeaturePhoto"
                className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-full bg-cover bg-[top_2rem] bg-no-repeat flex justify-center items-center"
              >
                <button
                  type="button"
                  className="px-4 py-2 text-[#0000008c] bg-white rounded-lg border border-[#5C74FF]"
                >
                  Add Featured Image
                </button>
              </label>
              <input
                type="file"
                name="campaignFeaturePhoto"
                id="campaignFeaturePhoto"
                className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
                placeholder=""
              />
            </div>
            <div className="w-full flex justify-center items-center space-x-6 border-dashed border-[#e0d8ff99]">
              <div className="w-1/4">
                <label
                  htmlFor="campaignGallery1"
                  className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-32 bg-cover bg-[top_2rem] bg-no-repeat flex justify-center items-center"
                >
                  <button
                    type="button"
                    className="px-4 py-2 text-[#0000008c] bg-white rounded-lg border border-[#5C74FF]"
                  >
                    Image 1
                  </button>
                </label>
                <input
                  type="file"
                  name="campaignGallery1"
                  id="campaignGallery1"
                  className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
                  placeholder=""
                />
              </div>
              <div className="w-1/4">
                <label
                  htmlFor="campaignGallery2"
                  className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-32 bg-cover bg-[top_2rem] bg-no-repeat flex justify-center items-center"
                >
                  <button
                    type="button"
                    className="px-4 py-2 text-[#0000008c] bg-white rounded-lg border border-[#5C74FF]"
                  >
                    Image 2
                  </button>
                </label>
                <input
                  type="file"
                  name="campaignGallery2"
                  id="campaignGallery2"
                  className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
                  placeholder=""
                />
              </div>
              <div className="w-1/4">
                <label
                  htmlFor="campaignGallery3"
                  className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-32 bg-cover bg-[top_2rem] bg-no-repeat flex justify-center items-center"
                >
                  <button
                    type="button"
                    className="px-4 py-2 text-[#0000008c] bg-white rounded-lg border border-[#5C74FF]"
                  >
                    Image 3
                  </button>
                </label>
                <input
                  type="file"
                  name="campaignGallery3"
                  id="campaignGallery3"
                  className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
                  placeholder=""
                />
              </div>
              <div className="w-1/4">
                <label
                  htmlFor="campaignGallery4"
                  className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-32 bg-cover bg-[top_2rem] bg-no-repeat flex justify-center items-center"
                >
                  <button
                    type="button"
                    className="px-4 py-2 text-[#0000008c] bg-white rounded-lg border border-[#5C74FF]"
                  >
                    Image 4
                  </button>
                </label>
                <input
                  type="file"
                  name="campaignGallery4"
                  id="campaignGallery4"
                  className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
                  placeholder=""
                />
              </div>
            </div>
            <div className="w-full flex justify-between items-start">
              <div className="flex flex-col justify-center items-start space-y-4">
                <div className="w-full flex flex-col justify-center items-start space-y-3">
                  <label
                    htmlFor="fundInDollars"
                    className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                  >
                    Target Fundraising in Dollars
                  </label>
                  <Input
                    startContent={
                      <BiSolidDollarCircle className="text-[#5C74FF]" />
                    }
                    autoFocus
                    variant="faded"
                    name="fundInDollars"
                    placeholder="5,000,000"
                    className="w-full"
                  />
                </div>
                <div className="w-full flex flex-col justify-center items-start space-y-3">
                  <label
                    htmlFor="startDate"
                    className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                  >
                    Choose Start Date
                  </label>
                  <Input
                    type="date"
                    autoFocus
                    name="startDate"
                    variant="faded"
                    placeholder="5,000,000"
                    className="text-[#0000008c] w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-start space-y-4">
                <div className="w-full flex flex-col justify-center items-start space-y-3">
                  <label
                    htmlFor="fundInRupees"
                    className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                  >
                    Target Fundraising in Rupees
                  </label>
                  <Input
                    startContent={
                      <HiMiniCurrencyRupee className="text-[#5C74FF]" />
                    }
                    autoFocus
                    name="fundInRupees"
                    variant="faded"
                    placeholder="50,00,000"
                    className="w-full"
                  />
                </div>
                <div className="w-full flex flex-col justify-center items-start space-y-3">
                  <label
                    htmlFor="endDate"
                    className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                  >
                    Choose End Date
                  </label>
                  <Input
                    type="date"
                    autoFocus
                    name="endDate"
                    variant="faded"
                    placeholder="50,00,000"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="w-[80%] flex flex-col justify-center items-start space-y-3">
              <label
                htmlFor="fundDesc"
                className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
              >
                Description
              </label>
              <Textarea
                name="fundDesc"
                placeholder="Enter your description"
                className="max-w-md w-full my-4"
              />
            </div>
            <div className="flex justify-start items-center">
              <button
                type="submit"
                className="py-2 px-8 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans font-semibold"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="w-[20%] flex flex-col justify-start items-center justify-self-end">
          <div className="h-40">
            <button
              type="button"
              className="py-2 px-8 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans font-semibold"
              onClick={() => router.back()}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
