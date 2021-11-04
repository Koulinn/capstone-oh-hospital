const CLOUD_PRESET = process.env.REACT_APP_CLOUDINARY_PRESET
const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_NAME


const uploadCloudinary = async (file)=>{
    try {
        const form = new FormData()
        form.append('file', file)
        form.append("upload_preset", CLOUD_PRESET)
        form.append("cloud_name", CLOUD_NAME)
        const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
          method: "post",
          body: form
        })
        if(res.status === 200){
          const data = await res.json()
          return data.secure_url
        } else {
          return false
        }
        
    } catch (error) {
        console.log(error)
        return false
    }
}

const requests_reg ={
    uploadCloudinary:uploadCloudinary,

}

export default requests_reg