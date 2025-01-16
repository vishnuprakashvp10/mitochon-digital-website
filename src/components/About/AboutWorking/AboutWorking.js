import image from "@/constant/Images/image"
import Image from "next/image"
import './AboutWorking.css'

const AboutWorking = () => {
  return (
    <section className="about-working-process">
    <div className="app__container">
        <div className="grid grid-cols-1">
            <div>
                <div className="text-center about-padding">
                    <div className="section-sub-title">
                        <h4 className="text-lg pb-4 font-normal capitalize">Learn more about us</h4>
                    </div>
                    <div className="primary-heading">
                        <h2>Our working <span className="highlight">process</span></h2>
                    </div>
            </div>
            </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
                <div className="h3-wc-area relative">
                <a href="/services/website-development"> 
                    <div className="working-card">
                    
                        <div className="working-card-icon svg-blue">
                            <svg  enable-background="new 0 0 511.999 511.999" height="512" viewBox="0 0 511.999 511.999" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m182.29 314.284 15.425 15.425c5.341 5.339 13.981 5.339 19.322 0l9.653-9.654c1.549.709 3.136 1.366 4.739 1.963v13.652c0 7.534 6.129 13.663 13.663 13.663h21.813c7.534 0 13.663-6.129 13.663-13.663v-13.652c1.603-.597 3.19-1.254 4.739-1.963l9.654 9.655c5.325 5.322 13.994 5.325 19.321-.001l15.425-15.425c5.326-5.326 5.326-13.994-.001-19.323l-9.653-9.652c.709-1.549 1.366-3.136 1.963-4.739h13.652c7.534 0 13.663-6.129 13.663-13.663v-21.813c0-7.534-6.129-13.663-13.663-13.663h-13.652c-.596-1.602-1.254-3.189-1.963-4.739l9.655-9.654c5.325-5.327 5.325-13.995-.001-19.321l-15.426-15.425c-5.326-5.327-13.994-5.325-19.322 0l-9.652 9.654c-1.549-.709-3.136-1.366-4.739-1.963v-13.652c0-7.534-6.129-13.663-13.663-13.663h-21.813c-7.534 0-13.663 6.129-13.663 13.663v13.652c-1.605.598-3.193 1.255-4.739 1.963l-9.653-9.653c-5.338-5.34-13.983-5.341-19.322 0l-15.425 15.424c-5.326 5.326-5.326 13.994.001 19.323l9.653 9.652c-.709 1.549-1.366 3.136-1.963 4.739h-13.652c-7.534 0-13.663 6.129-13.663 13.663v21.813c0 7.534 6.129 13.663 13.663 13.663h13.652c.597 1.604 1.255 3.191 1.963 4.739l-9.655 9.654c-5.325 5.327-5.325 13.995.001 19.321zm8.633-48.715h-13.257v-19.14h13.257c5.762 0 10.927-3.635 12.853-9.042.623-1.75 1.34-3.481 2.133-5.15 2.464-5.19 1.382-11.414-2.691-15.487l-9.374-9.374 13.533-13.533 9.374 9.375c4.073 4.072 10.297 5.156 15.491 2.688 1.662-.789 3.394-1.507 5.145-2.131 5.409-1.926 9.044-7.091 9.044-12.852v-13.257h19.14v13.257c0 5.761 3.635 10.926 9.042 12.852 1.75.623 3.481 1.34 5.15 2.133 5.19 2.465 11.412 1.381 15.487-2.691l9.374-9.374 13.533 13.533-9.375 9.374c-4.073 4.074-5.154 10.298-2.69 15.487.793 1.669 1.51 3.401 2.133 5.148 1.926 5.409 7.091 9.044 12.853 9.044h13.257v19.14h-13.258c-5.761 0-10.926 3.635-12.851 9.042-.624 1.75-1.341 3.481-2.134 5.15-2.463 5.188-1.382 11.412 2.691 15.487l9.374 9.374-13.533 13.533-9.376-9.376c-4.072-4.071-10.294-5.152-15.488-2.688-1.666.792-3.397 1.509-5.145 2.131-5.41 1.926-9.045 7.091-9.045 12.853v13.258h-19.14v-13.258c0-5.761-3.635-10.926-9.042-12.851-1.75-.624-3.481-1.341-5.15-2.134-5.191-2.465-11.414-1.381-15.487 2.69l-9.374 9.375-13.533-13.533 9.376-9.376c4.071-4.073 5.152-10.297 2.688-15.488-.792-1.666-1.509-3.397-2.132-5.146-1.926-5.408-7.091-9.043-12.853-9.043z"/><path d="m256 296.029c22.072 0 40.029-17.957 40.029-40.03 0-22.072-17.957-40.029-40.029-40.029s-40.03 17.957-40.03 40.029c0 22.073 17.958 40.03 40.03 40.03zm0-65.059c13.801 0 25.029 11.229 25.029 25.029 0 13.802-11.229 25.03-25.029 25.03-13.802 0-25.03-11.229-25.03-25.03s11.228-25.029 25.03-25.029z"/><path d="m94.218 188.437c52.09 0 94.219-42.331 94.219-94.218 0-51.953-42.267-94.219-94.219-94.219s-94.218 42.266-94.218 94.218c0 51.911 42.236 94.219 94.218 94.219zm50.203-32.988c-14.197 11.661-31.871 17.988-50.203 17.988-17.936 0-35.71-6.084-50.202-17.987 0-15.529 12.243-26.314 25.858-26.314h48.688c13.629-.001 25.859 10.796 25.859 26.313zm-50.203-140.449c43.682 0 79.219 35.537 79.219 79.218 0 17.96-6.017 34.535-16.127 47.837-5.426-16.205-20.739-27.92-38.748-27.92h-48.688c-18.007 0-33.321 11.715-38.747 27.92-10.11-13.302-16.127-29.877-16.127-47.837 0-43.681 35.537-79.218 79.218-79.218z"/><path d="m417.781 323.562c-51.952 0-94.219 42.267-94.219 94.219 0 51.931 42.191 94.218 94.219 94.218 51.766 0 94.218-42.078 94.218-94.218 0-51.952-42.266-94.219-94.218-94.219zm50.202 155.45c-29.09 23.894-71.085 24.083-100.405 0 0-15.529 12.243-26.313 25.858-26.313h48.688c13.631-.001 25.859 10.795 25.859 26.313zm12.889-13.394c-5.426-16.205-20.739-27.92-38.747-27.92h-48.688c-18.007 0-33.32 11.715-38.746 27.92-10.111-13.302-16.128-29.877-16.128-47.837 0-43.682 35.537-79.219 79.219-79.219 43.681 0 79.218 35.537 79.218 79.219-.001 17.96-6.018 34.535-16.128 47.837z"/><path d="m120.145 90.979c14.331-14.33 14.332-37.524 0-51.854h.001c-14.329-14.329-37.524-14.333-51.854 0-14.332 14.329-14.333 37.522-.002 51.854 14.329 14.329 37.524 14.332 51.855 0zm-41.248-41.249c8.448-8.448 22.193-8.448 30.641 0h.001c8.467 8.468 8.468 22.173-.001 30.642-8.447 8.447-22.192 8.447-30.642 0-8.467-8.468-8.468-22.173.001-30.642z"/><path d="m68.291 414.542c14.293 14.293 37.557 14.295 51.854 0 14.296-14.297 14.296-37.56 0-51.856h-.001c-14.295-14.295-37.558-14.295-51.854 0-14.296 14.296-14.296 37.559.001 51.856zm10.605-41.249c8.45-8.448 22.194-8.448 30.642 0 8.448 8.447 8.448 22.194.001 30.642-8.447 8.449-22.194 8.449-30.642 0-8.448-8.448-8.448-22.195-.001-30.642z"/><path d="m391.853 39.124c-14.295 14.296-14.295 37.558 0 51.854 14.311 14.311 37.575 14.282 51.855 0 14.331-14.33 14.332-37.524 0-51.854h.001c-14.297-14.298-37.56-14.296-51.856 0zm41.249 41.248c-8.447 8.448-22.192 8.449-30.642 0-8.448-8.448-8.448-22.194 0-30.642 8.447-8.448 22.195-8.448 30.642 0h.001c8.467 8.469 8.468 22.174-.001 30.642z"/><path d="m443.708 362.686c-14.295-14.295-37.559-14.296-51.855.001-14.295 14.296-14.295 37.559.001 51.855s37.558 14.295 51.855 0c14.296-14.297 14.296-37.56-.001-51.856zm-10.605 41.249c-8.447 8.448-22.193 8.449-30.643.001-8.447-8.448-8.447-22.195-.001-30.643 8.449-8.447 22.194-8.448 30.643 0 8.448 8.447 8.448 22.194.001 30.642z"/><path d="m303.19 101.718c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-94.382c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z"/><path d="m208.809 410.281c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h94.382c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z"/><path d="m101.718 303.19v-94.382c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v94.382c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5z"/><path d="m425.28 303.19v-94.382c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v94.382c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5z"/><path d="m495.521 78.932c.794 4.065 4.739 6.719 8.799 5.922 4.065-.794 6.717-4.734 5.922-8.799-8.611-44.069-47.497-76.055-92.461-76.055-51.952 0-94.219 42.266-94.219 94.218 0 52.203 42.439 94.218 94.219 94.218 44.493 0 82.867-31.259 92.115-74.37.869-4.05-1.71-8.038-5.76-8.906-4.045-.866-8.037 1.71-8.906 5.76-2.48 11.56-7.495 22.102-14.368 31.107-5.434-16.191-20.74-27.892-38.737-27.892h-48.688c-18.007 0-33.321 11.715-38.747 27.92-10.111-13.302-16.127-29.877-16.127-47.837-.001-43.681 35.537-79.218 79.218-79.218 37.807 0 70.501 26.887 77.74 63.932zm-102.084 50.203h48.688c14.259 0 25.858 11.6 25.858 25.859v.367c-13.827 11.339-31.431 18.076-50.202 18.076-17.678 0-35.531-5.936-50.203-17.988 0-15.529 12.243-26.314 25.859-26.314z"/><path d="m94.218 511.999c51.995 0 94.219-42.284 94.219-94.218 0-44.551-31.632-83.368-75.213-92.3-4.052-.825-8.022 1.784-8.854 5.842s1.784 8.021 5.842 8.854c36.635 7.507 63.225 40.145 63.225 77.604 0 17.959-6.017 34.534-16.128 47.837-5.426-16.205-20.739-27.92-38.747-27.92h-48.688c-18.007 0-33.321 11.715-38.747 27.92-10.11-13.302-16.127-29.877-16.127-47.837 0-37.46 26.589-70.098 63.224-77.604 4.058-.832 6.673-4.796 5.842-8.854s-4.794-6.669-8.854-5.842c-43.581 8.932-75.212 47.749-75.212 92.3 0 51.858 42.109 94.218 94.218 94.218zm-24.344-59.301h48.688c13.63 0 25.859 10.796 25.859 26.313-29.04 23.852-71.046 24.115-100.405 0 0-15.529 12.243-26.313 25.858-26.313z"/></g></svg> 
                        </div>
                        <div className="card-title">
                            <h3 className="capitalize font-semibold">Website Planning and Strategy</h3>
                        </div>
                        
                    </div> 
                    <Image src={image.workingProcess1} alt="" className="working-card-arow1 arrow-ani hidden md:inline-block"/>
                    </a>
                </div>
            </div>
            <div className="mb-md-30">
                <div className="h3-wc-area relative mt-0 md:mt-12 ">
                <a href="/services/seo-service"> 
                    <div className="working-card">
                        <div className="working-card-icon svg-orange">
                            <svg enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m256 152.535h-14.031v8.05c0 1.531.623 2.919 1.644 3.94 1.02 1.021 2.438 1.672 3.969 1.672h16.866c1.53 0 2.92-.652 3.94-1.672 1.021-1.02 1.672-2.409 1.672-3.94v-8.05zm200.806 181.957-37.53-12.728-24.463 11.991v11.31c0 8.504 3.487 16.272 9.128 21.884 5.612 5.612 13.351 9.099 21.883 9.099 8.504 0 16.271-3.487 21.884-9.099 5.612-5.613 9.099-13.38 9.099-21.884v-10.573zm-61.994-17.377 20.239-9.892c1.814-1.049 4.025-1.333 6.151-.595l35.603 12.047v-14.854c0-3.855-1.587-7.37-4.138-9.921-2.523-2.551-6.038-4.139-9.894-4.139h-33.902c-3.854 0-7.369 1.587-9.921 4.139-2.552 2.551-4.139 6.066-4.139 9.921v13.294zm-339.619-8.39h61.994v-18.964h-47.933c-3.855 0-7.37 1.587-9.922 4.139-2.551 2.551-4.139 6.066-4.139 9.921zm61.995 15.024h-61.995v21.316c0 8.504 3.487 16.272 9.128 21.884 5.612 5.612 13.352 9.099 21.884 9.099 8.504 0 16.271-3.487 21.883-9.099 5.612-5.613 9.1-13.38 9.1-21.884zm169.823 10.006c-10.318 1.418-26.787 1.105-40.563-10.885-4.847 2.778-12.359 5.811-21.43 5.159v17.036c0 8.504 3.486 16.272 9.099 21.884 5.642 5.612 13.38 9.099 21.884 9.099 8.532 0 16.271-3.487 21.884-9.099 5.641-5.613 9.127-13.38 9.127-21.884v-11.31zm-61.993-20.75c6.321.822 12.643-1.361 17.433-5.471 3.118-2.721 7.824-2.381 10.545.737 10.971 12.643 26.221 11.877 34.016 10.403v-14.854c0-3.855-1.587-7.37-4.139-9.921-2.551-2.551-6.065-4.139-9.921-4.139h-33.902c-3.855 0-7.342 1.587-9.893 4.139-2.552 2.551-4.139 6.066-4.139 9.921zm-92.835 32.06c0 9.468-2.892 18.312-7.852 25.654 10.375.992 19.7 5.669 26.702 12.643 7.936 7.937 12.841 18.907 12.841 30.955v90.199c0 4.139-3.345 7.484-7.483 7.484-46.8 0-93.601 0-140.372 0-4.139 0-7.512-3.345-7.512-7.484v-28.12c0-4.139 3.373-7.483 7.512-7.483s7.484 3.345 7.484 7.483v20.608h14.428v-68.684c0-4.167 3.373-7.512 7.512-7.512s7.512 3.345 7.512 7.512v68.684h66.501v-68.684c0-4.167 3.345-7.512 7.512-7.512 4.139 0 7.483 3.345 7.483 7.512v68.684h14.429v-82.688c0-7.909-3.231-15.109-8.447-20.353-5.244-5.216-12.444-8.447-20.352-8.447h-12.02c-6.52 3.515-13.975 5.527-21.854 5.527-7.909 0-15.336-2.013-21.855-5.527h-12.021c-7.938 0-15.138 3.231-20.354 8.447-5.215 5.244-8.475 12.444-8.475 20.353v28.12c0 4.139-3.346 7.484-7.484 7.484-4.139 0-7.512-3.345-7.512-7.484v-28.12c0-12.048 4.933-23.018 12.869-30.955 7.002-6.974 16.328-11.65 26.703-12.643-4.961-7.342-7.881-16.186-7.881-25.654v-28.829-12.416c0-8.022 3.26-15.278 8.532-20.522 5.272-5.273 12.529-8.533 20.523-8.533h55.445c4.139 0 7.483 3.345 7.483 7.484v33.987 28.83zm339.619 0c0 9.468-2.892 18.312-7.852 25.654 10.374.992 19.7 5.669 26.701 12.643 7.938 7.937 12.842 18.907 12.842 30.955v90.199c0 4.139-3.346 7.484-7.483 7.484-46.8 0-93.601 0-140.372 0-4.139 0-7.512-3.345-7.512-7.484v-28.12c0-4.139 3.373-7.483 7.512-7.483s7.483 3.345 7.483 7.483v20.608h14.429v-68.684c0-4.167 3.373-7.512 7.512-7.512s7.512 3.345 7.512 7.512v68.684h66.501v-68.684c0-4.167 3.345-7.512 7.512-7.512 4.139 0 7.483 3.345 7.483 7.512v68.684h14.428v-82.688c0-7.909-3.23-15.109-8.447-20.353-5.244-5.216-12.443-8.447-20.352-8.447h-12.02c-6.52 3.515-13.975 5.527-21.855 5.527-7.908 0-15.335-2.013-21.854-5.527h-12.02c-7.938 0-15.138 3.231-20.353 8.447-5.216 5.244-8.476 12.444-8.476 20.353v28.12c0 4.139-3.345 7.484-7.483 7.484s-7.512-3.345-7.512-7.484v-28.12c0-12.048 4.933-23.018 12.869-30.955 7.002-6.974 16.328-11.65 26.703-12.643-4.961-7.342-7.881-16.186-7.881-25.654v-41.245c0-8.022 3.26-15.278 8.532-20.522 5.272-5.273 12.529-8.533 20.522-8.533h33.902c7.994 0 15.251 3.26 20.523 8.533 5.244 5.244 8.504 12.529 8.504 20.522v41.246zm-169.795 0c0 9.468-2.92 18.312-7.853 25.654 10.347.992 19.7 5.669 26.674 12.643 7.938 7.937 12.87 18.907 12.87 30.955v90.199c0 4.139-3.346 7.484-7.513 7.484-46.771 0-93.571 0-140.371 0-4.139 0-7.483-3.345-7.483-7.484v-28.12c0-4.139 3.345-7.483 7.483-7.483s7.512 3.345 7.512 7.483v20.608h14.429v-68.684c0-4.167 3.344-7.512 7.482-7.512 4.168 0 7.512 3.345 7.512 7.512v68.684h66.529v-68.684c0-4.167 3.346-7.512 7.484-7.512s7.512 3.345 7.512 7.512v68.684h14.428v-82.688c0-7.909-3.26-15.109-8.475-20.353-5.216-5.216-12.415-8.447-20.324-8.447h-12.048c-6.52 3.515-13.945 5.527-21.854 5.527-7.88 0-15.335-2.013-21.827-5.527h-12.047c-7.908 0-15.108 3.231-20.324 8.447-5.244 5.244-8.476 12.444-8.476 20.353v28.12c0 4.139-3.374 7.484-7.512 7.484-4.139 0-7.483-3.345-7.483-7.484v-28.12c0-12.048 4.903-23.018 12.841-30.955 7.001-6.974 16.327-11.65 26.702-12.643-4.961-7.342-7.851-16.186-7.851-25.654v-41.245c0-8.022 3.26-15.278 8.504-20.522 5.271-5.273 12.529-8.533 20.522-8.533h33.902c7.993 0 15.278 3.26 20.522 8.533 5.273 5.244 8.533 12.5 8.533 20.522zm-161.349-146.609h88.526c2.977 0 5.527 1.729 6.746 4.224 6.689 11.594 13.38 23.188 20.069 34.782 6.774-11.764 13.578-23.499 20.353-35.235 1.332-2.324 3.799-3.77 6.463-3.77h88.753c2.211 0 4.195.964 5.585 2.495l36.935 35.575 4.167-35.745c.369-3.203 2.693-5.698 5.641-6.435 18.822-5.869 35.122-17.689 46.631-33.223 11.281-15.223 17.971-34.073 17.971-54.398 0-25.229-10.317-48.133-26.929-64.772-16.64-16.64-39.571-26.958-64.8-26.958h-281.538c-25.229 0-48.133 10.318-64.771 26.958-16.64 16.639-26.957 39.572-26.957 64.772 0 20.325 6.69 39.175 17.971 54.398 11.594 15.647 28.035 27.524 47.027 33.364 3.175.964 4.932 3.515 5.301 6.689l4.11 35.349 37.36-35.972c1.446-1.389 3.43-2.098 5.386-2.098zm84.218 14.996h-81.44l-45.752 44.079c-1.162 1.247-2.777 2.098-4.62 2.296-4.11.482-7.823-2.466-8.277-6.576l-5.357-46.035c-20.098-7.229-37.474-20.325-49.975-37.191-13.152-17.773-20.948-39.686-20.948-63.299 0-29.367 12.02-56.041 31.352-75.373 19.331-19.334 46.005-31.353 75.372-31.353h281.537c29.367 0 56.041 12.019 75.401 31.352 19.333 19.332 31.323 46.007 31.323 75.373 0 23.613-7.796 45.525-20.948 63.299-12.501 16.866-29.849 29.962-49.946 37.191l-5.357 45.922c-.199 1.644-.879 3.232-2.069 4.45-2.863 2.977-7.597 3.061-10.573.198l-46.035-44.334h-81.44c-8.221 14.23-16.412 28.46-24.633 42.69-.652 1.105-1.588 2.041-2.75 2.721-3.6 2.069-8.163.822-10.204-2.749-8.221-14.23-16.441-28.431-24.661-42.661zm2.125-68.997c-.197-8.532-4.649-15.307-9.297-22.365-6.52-9.893-13.323-20.211-13.323-36.822 0-14.258 5.783-27.157 15.138-36.482 9.325-9.354 22.252-15.137 36.481-15.137 14.259 0 27.155 5.783 36.511 15.137 9.325 9.326 15.108 22.224 15.108 36.482 0 16.611-6.804 26.929-13.295 36.822-4.648 7.058-9.099 13.833-9.298 22.365l.029 16.13c0 5.669-2.325 10.828-6.066 14.542-3.714 3.742-8.873 6.066-14.542 6.066h-16.866c-5.669 0-10.828-2.325-14.57-6.066-3.741-3.713-6.037-8.873-6.037-14.542zm14.287-6.945h29.452c1.644-9.297 6.293-16.328 11.112-23.641 5.243-7.995 10.771-16.385 10.771-28.602 0-10.12-4.11-19.276-10.715-25.881-6.633-6.633-15.788-10.743-25.908-10.743-10.091 0-19.247 4.11-25.88 10.744-6.634 6.605-10.715 15.761-10.715 25.881 0 12.217 5.498 20.607 10.771 28.602 4.791 7.313 9.44 14.343 11.112 23.64z"/></g></svg>
                        </div>
                        <div className="card-title get-bottom animate">
                            <h3 className="capitalize font-semibold">Search Engine Optimisation</h3>
                        </div>
                    </div>
                    <Image src={image.workingProcess2} alt="" className="working-card-arow2 arrow-ani hidden md:inline-block"/>
                    </a>
                </div>
            </div>
            <div className="mb-sm-30">
                <div className="h3-wc-area relative">
                <a href="/services/paid-online-advertising"> 
                    <div className="working-card">
                        <div className="working-card-icon svg-purple">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512" height="512"><g id="working-chair-desk-monitor-online"><path d="M62,37V33a1,1,0,0,0-1-1H48V31a3.009,3.009,0,0,0-3-3H44V26h5a3.009,3.009,0,0,0,3-3V5a3.009,3.009,0,0,0-3-3H15a3.009,3.009,0,0,0-3,3V23a3.009,3.009,0,0,0,3,3h5v2H19a3.009,3.009,0,0,0-3,3v1H3a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H4.87L2.01,60.88a.968.968,0,0,0,.24.78A.981.981,0,0,0,3,62H5a1,1,0,0,0,.96-.72L12.75,38H16v3a1,1,0,0,0,1,1h3v2a1,1,0,0,0,1,1h8v6H22a1,1,0,0,0-1,1v4.18a3,3,0,1,0,2,0V53h8v3.18a3,3,0,1,0,2,0V53h8v3.18a3,3,0,1,0,2,0V52a1,1,0,0,0-1-1H35V45h8a1,1,0,0,0,1-1V42h3a1,1,0,0,0,1-1V38h3.25l6.79,23.28A1,1,0,0,0,59,62h2a.981.981,0,0,0,.75-.34.968.968,0,0,0,.24-.78L59.13,38H61A1,1,0,0,0,62,37ZM4.25,60H4.13L6.88,38h3.79ZM16,36H4V34H16Zm4,4H18V31a1,1,0,0,1,1-1h1Zm2,20a1,1,0,1,1,1-1A1,1,0,0,1,22,60Zm20-2a1,1,0,1,1-1,1A1,1,0,0,1,42,58ZM32,60a1,1,0,1,1,1-1A1,1,0,0,1,32,60Zm1-9H31V45h2Zm9-8H22V23a1,1,0,0,1,1-1H41a1,1,0,0,1,1,1ZM26,20V18a6,6,0,0,1,12,0v2Zm15,0H40V18a8,8,0,0,0-16,0v2H23a3.009,3.009,0,0,0-3,3v1H15a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1H49a1,1,0,0,1,1,1V23a1,1,0,0,1-1,1H44V23A3.009,3.009,0,0,0,41,20Zm5,20H44V30h1a1,1,0,0,1,1,1ZM59.87,60h-.12L53.33,38h3.79ZM60,36H48V34H60Z"/><path d="M46,11h2V7a1,1,0,0,0-1-1H43V8h3Z"/><rect x="46" y="13" width="2" height="2"/></g></svg>
                       
                       </div>
                       <div className="card-title get-bottom animate">
                            <h3 className="capitalize font-semibold">Paid Advertising Strategy & Web Analytics</h3>
                       </div>
                    </div>
                    <Image src={image.workingProcess1} alt="" className="working-card-arow3 arrow-ani hidden md:inline-block"/>
                    </a>
                </div>
            </div>
            <div className="">
            <a href="/services/cro-and-usability"> 
                <div className="working-card mt-0 md:mt-12 ">
                
                    <div className="working-card-icon svg-ired">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512" height="512"><g id="workhome-virus-covid19-coronavirus-home"><path d="M49,37a1,1,0,0,0,1-1V35a1,1,0,0,0-2,0v1A1,1,0,0,0,49,37Z"/><path d="M45,37a1,1,0,0,0,1-1V35a1,1,0,0,0-2,0v1A1,1,0,0,0,45,37Z"/><path d="M48.293,39.293a1.831,1.831,0,0,1-2.586,0,1,1,0,0,0-1.414,1.414,3.831,3.831,0,0,0,5.414,0,1,1,0,0,0-1.414-1.414Z"/><path d="M55,47H52a1,1,0,0,1-1-1V44.74A7.01,7.01,0,0,0,54,39a3.009,3.009,0,0,0,3-3V35a2.986,2.986,0,0,0-1-2.22V28a5,5,0,0,0-5-5V21.44l1.57.84a3.466,3.466,0,0,0,3.58.17,3.511,3.511,0,0,0,.2-6.07L30.48,2.12a1.02,1.02,0,0,0-.96,0L3.58,16.42a3.515,3.515,0,0,0,.27,6.03,3.605,3.605,0,0,0,1.68.42,3.239,3.239,0,0,0,1.82-.54L9,21.44V42H7.49a3,3,0,0,0-2.93,3.65l3.12,14A2.976,2.976,0,0,0,10.6,62H61a1,1,0,0,0,1-1V54A7.008,7.008,0,0,0,55,47Zm-3.48,1.95a6.008,6.008,0,0,1-9.04,0A2.99,2.99,0,0,0,45,46v-.29a7.042,7.042,0,0,0,4,0V46A2.99,2.99,0,0,0,51.52,48.95ZM52,39a5,5,0,0,1-10,0l.08-7a5.09,5.09,0,0,0,2.27-.54l.65-.34.58.31A5.1,5.1,0,0,0,47.9,32H52Zm3-4v1a1,1,0,0,1-1,1V34A1,1,0,0,1,55,35Zm-1-7v4a2.006,2.006,0,0,0-2-2H47.9a3.068,3.068,0,0,1-1.39-.34l-1.04-.55a1,1,0,0,0-.92,0l-1.11.56A3.029,3.029,0,0,1,42,30a2.006,2.006,0,0,0-2,2V28a2.006,2.006,0,0,1,2-2h1a1,1,0,0,1,1,1,1,1,0,0,0,2,0V26a1,1,0,0,1,1-1h4A3.009,3.009,0,0,1,54,28ZM6.33,20.62A1.5,1.5,0,0,1,4,19.36a1.481,1.481,0,0,1,.61-1.22L30,4.14,55.32,18.1a1.511,1.511,0,0,1-.11,2.59,1.566,1.566,0,0,1-1.62-.12L30.47,8.12a.98.98,0,0,0-.94,0ZM10.6,60a.985.985,0,0,1-.97-.78l-3.11-14a1,1,0,0,1,.19-.85A1.022,1.022,0,0,1,7.49,44H29.4a.985.985,0,0,1,.97.78L33.75,60ZM33.51,49.7l-1.19-5.35A2.976,2.976,0,0,0,29.4,42H11V20.85a1.043,1.043,0,0,0-.1-.43L30,10.14,49,20.36V23H47a3,3,0,0,0-2.53,1.39A2.934,2.934,0,0,0,43,24H42a4,4,0,0,0-4,4v4.78A2.986,2.986,0,0,0,37,35v1a3.009,3.009,0,0,0,3,3,7.01,7.01,0,0,0,3,5.74V46a1,1,0,0,1-1,1H39A7.041,7.041,0,0,0,33.51,49.7ZM40,34v3a1,1,0,0,1-1-1V35A1,1,0,0,1,40,34Zm4,26H35.8l-.44-2H46A2.006,2.006,0,0,1,44,60Zm16,0H56V55a1,1,0,0,0-2,0v5H47.44A3.906,3.906,0,0,0,48,58V57a1,1,0,0,0-1-1H34.91l-.73-3.29A5.02,5.02,0,0,1,39,49h1.1a7.951,7.951,0,0,0,13.8,0H55a5,5,0,0,1,5,5Z"/><path d="M20,55a3,3,0,1,1,3-3A3,3,0,0,1,20,55Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,20,51Z"/><path d="M16,36h5.647l4.7,3.779A1,1,0,0,0,26.97,40a1,1,0,0,0,1-.992L27.992,36H32a3,3,0,0,0,3-3V23a3,3,0,0,0-3-3H16a3,3,0,0,0-3,3V33A3,3,0,0,0,16,36ZM15,23a1,1,0,0,1,1-1H32a1,1,0,0,1,1,1V33a1,1,0,0,1-1,1H27a1,1,0,0,0-1,.992l-.015,1.932-3.358-2.7A1,1,0,0,0,22,34H16a1,1,0,0,1-1-1Z"/><path d="M18,26h1a1,1,0,0,0,0-2H18a1,1,0,0,0,0,2Z"/><path d="M22,26h8a1,1,0,0,0,0-2H22a1,1,0,0,0,0,2Z"/><path d="M22,29h8a1,1,0,0,0,0-2H22a1,1,0,0,0,0,2Z"/><path d="M18,29h1a1,1,0,0,0,0-2H18a1,1,0,0,0,0,2Z"/><path d="M18,32h1a1,1,0,0,0,0-2H18a1,1,0,0,0,0,2Z"/><path d="M22,32h8a1,1,0,0,0,0-2H22a1,1,0,0,0,0,2Z"/></g></svg>
                    </div>
                    <div className="card-title get-bottom animate">
                        <h3 className="capitalize font-semibold">Launch Project</h3>
                        
                    </div>
                    
                </div>
                </a>
            </div>
            
        </div>
    </div>
</section> 
  )
}

export default AboutWorking