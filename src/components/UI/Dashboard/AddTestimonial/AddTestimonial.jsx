"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '@/app/firebase';
import { createTestimonial } from '../../../../app/services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTestimonial = () => {
    const [imagefeatureUpload, setImagefeatureUpload] = useState(null);

    const [formData, setFormData] = useState({
        coordinator_id: 12,
        name: '',
        campaign_name: '',
        description: '',
        image_url: '',
      });

      useEffect(() => {
        const uploadFile = async (file, fileType) => {
          if (!file) return;
    
          const fileRef = ref(storage, `testimonial/${file.name}`);
    
          try {
            await uploadBytes(fileRef, file);
            const url = await getDownloadURL(fileRef);
    
            setFormData((prevData) => ({
              ...prevData,
              [fileType]: url,
            }));
          } catch (error) {
            console.error('Error uploading file:', error);
          }
        };
    
        uploadFile(imagefeatureUpload, 'image_url');
      }, [imagefeatureUpload]);

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
          const response = await createTestimonial(formData);
          console.log("response", response);
          toast.success('Testimonial created successfully!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            hideProgressBar: false,
        });
        } catch (error) {
          console.error('Error:', error);
          toast.error('Error creating Testimonial. Please try again!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000, 
            hideProgressBar: false,
        });
        }
      };

  return (
    <></>
  )
}

export default AddTestimonial