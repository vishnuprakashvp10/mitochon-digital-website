'use client'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const items = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const WeHelp = ({ name }) => {
  return (
    <section className="py-16 md:py-32 bg-slate-50">
      <div className="app__container">
        <div className="mx-auto mb-12">
          <div className="degital-marketing-heading text-center">
            <div className="section-sub-title pb-4">
              <h4 className="primary-heading">WHAT WE <span className="highlight">DO</span></h4>
            </div>
            <div>
              <h2>services ensures that your business reaches its full potential in the competitive digital landscape. As one of the best social media marketing companies in the United Kingdom, we offer a range of social media advertising services including social media ad campaigns, social media growth strategies, and social media content management. Our comprehensive approach helps businesses effectively optimize their social media marketing campaigns for maximum conversion and engagement. As a top-rated paid social agency, we specialize in creating impactful, data-driven social media marketing services packages. From social media marketing for realtors to B2B social media marketing, our goal is to maximize your ROI while building a strong, authentic connection between your brand and your audience.</h2>
            </div>
          </div>
        </div>
        <motion.div variants={variants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div variants={items}>
        <div className="service-card-five text-center">
            <div className="svg-orange flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="outline"
                viewBox="0 0 512 512"
                width="100"
                height="100"
              >
                <path d="M410.34277,18.34277,388.68555,40H360a8.00039,8.00039,0,0,0-8,8V76.68555L324.68555,104H296a8.00039,8.00039,0,0,0-8,8v28.68555L260.68555,168H232a8.00039,8.00039,0,0,0-8,8v28.68555L188.68652,240H161.33423a95.64587,95.64587,0,0,1,42.97925-64.91309l-8.627-13.47461A112.00943,112.00943,0,0,0,256,368H358.75293A152.11931,152.11931,0,0,1,256,408c-83.81348,0-152-68.18652-152-152H88a167.79394,167.79394,0,0,0,4.82446,40H32V216H96a8,8,0,0,0,7.39062-4.93848l12.92188-31.19629a8.00028,8.00028,0,0,0-1.7334-8.71875l-45.25586-45.2539,56.56934-56.56934,45.2539,45.25586a7.99745,7.99745,0,0,0,8.71875,1.7334l31.19629-12.92188A8,8,0,0,0,216,96V32h80V80h16V24a8.00039,8.00039,0,0,0-8-8H208a8.00039,8.00039,0,0,0-8,8V90.6543l-21.31934,8.831L131.5498,52.35254a8.0018,8.0018,0,0,0-11.31445,0L52.35254,120.23535a8.0018,8.0018,0,0,0,0,11.31445l47.13281,47.13086L90.6543,200H24a8.00039,8.00039,0,0,0-8,8v96a8.00039,8.00039,0,0,0,8,8H90.6543l8.831,21.31934L52.35254,380.4502a8.0018,8.0018,0,0,0,0,11.31445l67.88281,67.88281a8.0018,8.0018,0,0,0,11.31445,0l47.13086-47.13281L200,421.3457V488a8.00039,8.00039,0,0,0,8,8h96a8.00039,8.00039,0,0,0,8-8V421.3457l21.31934-8.83105,47.13086,47.13281a8.0018,8.0018,0,0,0,11.31445,0l67.88281-67.88281a8.00062,8.00062,0,0,0-.001-11.31445L447.19629,368H488a8.00039,8.00039,0,0,0,8-8V88a8.00039,8.00039,0,0,0-8-8H424a8.00039,8.00039,0,0,0-8,8v56H360a8.00039,8.00039,0,0,0-8,8v40H296a8.00039,8.00039,0,0,0-8,8v48H232a8.00039,8.00039,0,0,0-8,8v32H165.491A95.5652,95.5652,0,0,1,160,256h32a8.00235,8.00235,0,0,0,5.65723-2.34277L235.31445,216H264a8.00039,8.00039,0,0,0,8-8V179.31445L299.31445,152H328a8.00039,8.00039,0,0,0,8-8V115.31445L363.31445,88H392a8.00039,8.00039,0,0,0,8-8V51.31445L419.31348,32H496V16H416A8.00235,8.00235,0,0,0,410.34277,18.34277Zm-284.45019,424.334L69.32324,386.10742l43.04395-43.042a169.30277,169.30277,0,0,0,56.56738,56.56738ZM216,480V419.17554a167.97791,167.97791,0,0,0,80-.01514V480Zm226.67676-93.89258-56.56934,56.56934-43.032-43.03369A168.05664,168.05664,0,0,0,381.20654,368h43.36182ZM432,96h48V352H432V96Zm-64,64h48V352H368V160Zm-64,48h48V352H304V208Zm-64,56h48v88H256a96.21362,96.21362,0,0,1-16-1.34082V264Zm-16,40v42.509A96.52,96.52,0,0,1,172.887,304Zm32-104H240V184h16Zm64-64H304V120h16Zm64-64H368V56h16Z" />
              </svg>
            </div>
            <div className="card-title">
              <h3 className="pb-6 text-xl font-bold">Social Media Strategy</h3>
            </div>
            <p className='app__text'>
            The ever-evolving landscape of social media digital marketing demands that your strategy remains innovative and adaptable. At Mitochon Digital, we ensure your product stays highly visible with our expertise as a leading social media content agency.   </p>
          </div>
        </motion.div>  
        
        <motion.div variants={items}>
          <div className="service-card-five text-center">
            <div className="svg-orange flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 496 496"
                xmlSpace="preserve"
              >
                <path d="M80 192c0-5.936-1.384-11.528-3.72-16.6L221.208 69.488C228.312 75.952 237.664 80 248 80c7.368 0 14.184-2.144 20.12-5.632l50.472 47.744C314.448 128.408 312 135.92 312 144c0 22.056 17.944 40 40 40s40-17.944 40-40c0-8.08-2.448-15.592-6.592-21.888l50.472-47.744C441.816 77.856 448.632 80 456 80c22.056 0 40-17.944 40-40S478.056 0 456 0s-40 17.944-40 40c0 8.88 3.008 17.016 7.92 23.656l-49.768 47.08C367.808 106.496 360.192 104 352 104s-15.808 2.496-22.152 6.736l-49.768-47.08C284.992 57.016 288 48.88 288 40c0-22.056-17.944-40-40-40s-40 17.944-40 40c0 5.936 1.384 11.528 3.72 16.608L66.792 162.512C59.688 156.048 50.344 152 40 152c-22.056 0-40 17.944-40 40s17.944 40 40 40 40-17.944 40-40zM456 16c13.232 0 24 10.768 24 24s-10.768 24-24 24-24-10.768-24-24 10.768-24 24-24zM352 120c13.232 0 24 10.768 24 24s-10.768 24-24 24-24-10.768-24-24 10.768-24 24-24zM248 16c13.232 0 24 10.768 24 24s-10.768 24-24 24-24-10.768-24-24 10.768-24 24-24zM40 216c-13.232 0-24-10.768-24-24s10.768-24 24-24 24 10.768 24 24-10.768 24-24 24zM480 369.472V344c0-30.88-25.12-56-56-56s-56 25.12-56 56v25.472c-9.288 3.312-16 12.112-16 22.528v80c0 13.232 10.768 24 24 24h96c13.232 0 24-10.768 24-24v-80c0-10.416-6.712-19.216-16-22.528zM384 344c0-22.056 17.944-40 40-40s40 17.944 40 40v24h-80v-24zm96 128c0 4.408-3.592 8-8 8h-96c-4.408 0-8-3.592-8-8v-80c0-4.408 3.592-8 8-8h96c4.408 0 8 3.592 8 8v80z" />
                <path d="M424 400c-13.232 0-24 10.768-24 24 0 10.416 6.712 19.216 16 22.528V464h16v-17.472c9.288-3.312 16-12.112 16-22.528 0-13.232-10.768-24-24-24zm0 32c-4.408 0-8-3.592-8-8 0-4.408 3.592-8 8-8 4.408 0 8 3.592 8 8 0 4.408-3.592 8-8 8zM370.192 196.704c20.416 21.632 34.752 48.288 41.448 77.096l15.584-3.624c-7.336-31.56-23.032-60.768-45.4-84.456l-11.632 10.984zM360 320v-16h-16.176c-1.064-33.544-8.656-61.984-19.096-85.56 9.704-3.696 18.048-7.688 24.728-11.48l-7.888-13.92c-6.392 3.624-14.416 7.472-23.864 10.976-14.192-26.616-31.424-45.856-44.68-58.152a166.527 166.527 0 0125.192 5.768l4.776-15.272C285.256 130.816 266.752 128 248 128c-101.456 0-184 82.544-184 184s82.544 184 184 184c32.672 0 64.776-8.672 92.816-25.088l-8.08-13.816c-18.352 10.744-38.624 17.784-59.624 20.952 13.24-12.296 30.424-31.512 44.584-58.064 5.048 1.88 10.016 3.912 14.816 6.232l6.96-14.408c-4.792-2.32-9.728-4.36-14.744-6.272 10.432-23.568 18.032-52.008 19.088-85.536H360zM222.72 146.112c-13.216 12.304-30.304 31.456-44.4 57.872-18.608-6.92-31.376-15.208-38.352-20.456 23.112-19.464 51.544-32.672 82.752-37.416zm-94.68 48.496c7.312 5.856 21.688 15.768 43.192 23.944-10.416 23.552-17.992 51.96-19.056 85.456H80.4c2.024-42.48 19.72-80.88 47.64-109.4zM80.408 320h71.776c1.056 33.488 8.64 61.896 19.056 85.456-21.504 8.176-35.88 18.088-43.192 23.944-27.928-28.528-45.624-66.928-47.64-109.4zm59.552 120.472c6.984-5.256 19.752-13.536 38.352-20.456 14.104 26.416 31.192 45.568 44.4 57.872-31.208-4.744-59.64-17.952-82.752-37.416zM240 471.664c-11.968-10.344-30.512-29.12-45.808-56.664 13.152-3.576 28.432-6.128 45.808-6.752v63.416zm0-79.416c-20.392.672-38.128 3.768-53.192 8.088-10.08-22.112-17.528-48.856-18.632-80.328H240v72.24zM240 304h-71.816c1.096-31.472 8.544-58.216 18.632-80.328 15.056 4.312 32.792 7.408 53.184 8.08V304zm0-88.24c-17.376-.624-32.656-3.184-45.808-6.752 15.296-27.552 33.84-46.32 45.808-56.664v63.416zm16-63.416c11.976 10.352 30.536 29.144 45.832 56.72-13.112 3.536-28.424 6.032-45.832 6.656v-63.376zm0 319.312v-63.464c16.072.56 31.408 2.768 45.872 6.672-15.304 27.616-33.888 46.432-45.872 56.792zm53.2-71.344c-16.728-4.816-34.52-7.512-53.2-8.112V320h71.816c-1.096 31.464-8.544 58.208-18.616 80.312zM256 304v-72.28c20.344-.68 38.184-3.728 53.192-8.032 10.08 22.104 17.528 48.848 18.624 80.312H256z" />
              </svg>
            </div>
            <div className="card-title">
              <h3 className="pb-6 text-xl font-bold">Social Media Engagement</h3>
            </div>
            <p className='app__text'>
            Our social media advertising and PPC advertising strategies go beyond crafting visually appealing ads. We focus on building meaningful relationships with your customers through effective social media influencer marketing and targeted advertising on social media. 
            </p>
          </div>
        </motion.div>

        <motion.div variants={items}>
          <div className="service-card-five text-center">
            <div className="svg-orange flex items-center justify-center mb-6">
              <svg
                id="Capa_1"
                enableBackground="new 0 0 512 512"
                height="100"
                viewBox="0 0 512 512"
                width="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <g>
                    <path d="m478.898 454.774c-.899-4.055-4.913-6.615-8.971-5.716-4.056.899-6.615 4.916-5.716 8.972.503 2.268.758 4.608.758 6.957 0 17.628-14.342 31.97-31.97 31.97-4.154 0-7.522 3.368-7.522 7.522s3.368 7.522 7.522 7.522c25.923 0 47.014-21.09 47.014-47.014-.001-3.442-.376-6.879-1.115-10.213z" />
                    <path d="m256 200.464c26.663 0 48.354-21.692 48.354-48.354 0-26.663-21.692-48.355-48.354-48.355s-48.354 21.692-48.354 48.355c0 26.662 21.691 48.354 48.354 48.354zm0-81.666c18.367 0 33.31 14.943 33.31 33.311 0 18.367-14.943 33.311-33.31 33.311s-33.31-14.943-33.31-33.311c0-18.367 14.943-33.311 33.31-33.311z" />
                    <path d="m128.851 293.815h48.364v29.607c-7.389 2.055-12.833 8.826-12.833 16.861v15.763c0 9.658 7.857 17.516 17.516 17.516h13.087l8.844 20.392c2.896 6.679 9.47 10.995 16.75 10.995h70.842c7.28 0 13.855-4.316 16.751-10.995l8.844-20.393h13.086c9.659 0 17.516-7.857 17.516-17.516v-15.763c0-8.035-5.445-14.806-12.833-16.861v-29.607h48.368c9.161 0 16.614-7.453 16.614-16.614v-33.998c0-3.979-1.43-7.83-4.027-10.844l-60.955-70.75v-31.039c0-36.647-12.818-71.943-36.092-99.386-7.512-8.857-15.851-17.152-24.785-24.651-10.377-8.712-25.439-8.712-35.816 0-8.934 7.499-17.273 15.794-24.784 24.651-23.274 27.443-36.092 62.739-36.092 99.386v31.043l-21.389 24.826c-2.711 3.147-2.358 7.897.789 10.608s7.897 2.358 10.609-.789l9.991-11.597v94.109h-48.364c-.866 0-1.57-.704-1.57-1.57v-33.998c0-.376.135-.74.38-1.024l16.92-19.639c2.712-3.147 2.358-7.897-.789-10.609-3.147-2.711-7.897-2.358-10.609.789l-16.92 19.639c-2.596 3.014-4.026 6.865-4.026 10.844v33.998c0 9.164 7.452 16.616 16.613 16.616zm255.49-51.636c.246.285.381.649.381 1.025v33.998c0 .866-.704 1.57-1.57 1.57h-48.365l-.003-94.113zm-89.972 145.791c-.509 1.176-1.667 1.935-2.949 1.935h-70.842c-1.281 0-2.439-.76-2.949-1.936l-6.248-14.407h89.236zm-69.588-347.055c6.965-8.212 14.698-15.903 22.984-22.86 4.772-4.005 11.699-4.006 16.471 0 8.286 6.956 16.019 14.647 22.984 22.86 2.039 2.404 10.389 14.006 10.534 14.233h-83.508c.21-.326 7.972-11.211 10.535-14.233zm-32.522 123.438v-33.782c0-21.147 4.725-41.782 13.606-60.379h100.269c8.88 18.597 13.606 39.231 13.606 60.379v192.197h-127.481l.004-158.364c0-.018-.003-.034-.004-.051zm-12.833 175.93c0-1.363 1.109-2.472 2.472-2.472h2.77 145.433c1.363 0 2.472 1.109 2.472 2.472v15.763c0 1.363-1.109 2.472-2.472 2.472h-148.203c-1.363 0-2.472-1.109-2.472-2.472z" />
                    <path d="m92.673 372.92c4.154 0 7.522-3.368 7.522-7.522v-44.527c0-4.154-3.368-7.522-7.522-7.522s-7.522 3.368-7.522 7.522v44.527c0 4.154 3.367 7.522 7.522 7.522z" />
                    <path d="m117.454 320.871v15.716c0 4.154 3.368 7.522 7.522 7.522s7.522-3.368 7.522-7.522v-15.716c0-4.154-3.368-7.522-7.522-7.522s-7.522 3.368-7.522 7.522z" />
                    <path d="m419.327 372.92c4.154 0 7.522-3.368 7.522-7.522v-44.527c0-4.154-3.368-7.522-7.522-7.522s-7.522 3.368-7.522 7.522v44.527c0 4.154 3.368 7.522 7.522 7.522z" />
                    <path d="m379.502 320.871v15.716c0 4.154 3.368 7.522 7.522 7.522s7.522-3.368 7.522-7.522v-15.716c0-4.154-3.368-7.522-7.522-7.522-4.155 0-7.522 3.368-7.522 7.522z" />
                    <path d="m429.093 425.603c-.033 3.915 2.942 7.201 6.842 7.555 3.99.363 7.824 1.456 11.394 3.249 3.713 1.866 8.233.368 10.098-3.344s.368-8.233-3.344-10.098c-3.345-1.681-6.845-2.943-10.461-3.778-3.018-18.166-18.842-32.061-37.85-32.061-11.21 0-21.817 4.97-29.038 13.31-7.11-2.997-14.792-4.561-22.55-4.561-20.875 0-39.755 11.021-50.077 28.658-5.398-2.219-11.264-3.433-17.356-3.433-11.463 0-22.435 4.389-30.752 12.019-8.317-7.629-19.29-12.019-30.752-12.019-6.091 0-11.958 1.214-17.356 3.433-10.322-17.637-29.202-28.658-50.077-28.658-7.758 0-15.44 1.564-22.55 4.561-7.221-8.34-17.828-13.31-29.039-13.31-19.005 0-34.827 13.889-37.848 32.051-21.139 4.812-36.391 23.504-36.391 45.81 0 25.923 21.09 47.014 47.014 47.014 4.154 0 7.522-3.368 7.522-7.522s-3.368-7.522-7.522-7.522c-17.628 0-31.97-14.342-31.97-31.97 0-16.642 12.482-30.325 29.034-31.829 3.899-.354 6.874-3.64 6.841-7.555l-.004-.168c.033-12.833 10.484-23.265 23.324-23.265 8.261 0 15.987 4.445 20.16 11.6 2.077 3.56 6.631 4.786 10.214 2.75 6.446-3.664 13.782-5.601 21.214-5.601 15.605 0 29.7 8.317 37.302 21.592-4.252 3.775-7.848 8.37-10.51 13.674-1.863 3.713-.364 8.233 3.349 10.097 1.083.544 2.234.801 3.368.801 2.755 0 5.408-1.519 6.729-4.149 2.446-4.873 6.058-8.863 10.393-11.737.079-.047.161-.087.239-.137 2.305-1.502 4.787-2.658 7.372-3.493 2.923-.92 6.011-1.422 9.192-1.422 9.679 0 18.849 4.668 24.567 12.491.473.682 1.06 1.302 1.771 1.816 2.595 1.875 6.29 1.833 8.828-.002.702-.508 1.284-1.118 1.754-1.791 5.716-7.837 14.894-12.514 24.584-12.514 3.617 0 7.121.628 10.388 1.807-.002.01-.003.02-.005.029 2.158.786 4.233 1.809 6.182 3.078.076.049.157.088.234.135 4.337 2.875 7.951 6.865 10.397 11.739 1.32 2.63 3.974 4.15 6.729 4.149 1.134 0 2.286-.258 3.368-.801 3.713-1.863 5.212-6.384 3.349-10.097-2.662-5.304-6.258-9.898-10.51-13.674 7.602-13.275 21.696-21.592 37.302-21.592 7.432 0 14.768 1.937 21.214 5.601 3.583 2.037 8.138.81 10.214-2.75 4.173-7.155 11.898-11.6 20.159-11.6 12.832 0 23.277 10.417 23.325 23.238-.002.071-.004.15-.004.196z" />
                    <path d="m99.704 466.758c-2.852-1.483-5.196-3.759-6.779-6.58-1.094-1.952-1.774-4.055-2.018-6.252-.46-4.129-4.178-7.101-8.308-6.643-4.129.46-7.103 4.18-6.643 8.308.469 4.209 1.764 8.228 3.849 11.946 3.02 5.383 7.5 9.729 12.958 12.568 1.109.577 2.296.85 3.465.85 2.716 0 5.339-1.476 6.68-4.052 1.915-3.686.481-8.229-3.204-10.145z" />
                    <path d="m352.566 438.334c-3.515-2.218-8.159-1.166-10.375 2.347s-1.166 8.158 2.347 10.375c2.718 1.716 4.864 4.178 6.206 7.122.929 2.037 1.43 4.189 1.491 6.399.113 4.082 3.457 7.315 7.515 7.315.07 0 .141-.001.211-.003 4.153-.115 7.426-3.573 7.312-7.726-.117-4.233-1.072-8.345-2.84-12.224-2.561-5.617-6.664-10.321-11.867-13.605z" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="card-title">
              <h3 className="pb-6 text-xl font-bold">Social Media Optimization</h3>
            </div>
            <p className='app__text'>
            Maintaining a consistent and engaging presence on social media is key to long-term success. Our social media management services at Mitochon Digital ensure that your brand&apos;s voice stays relevant.  
            </p>
          </div>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeHelp;
