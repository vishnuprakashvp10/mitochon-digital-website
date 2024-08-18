"use client";
import { motion } from "framer-motion";

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
const Marketing = () => {
  return (
    <section className="app__feature py-6 md:py-32 bg-slate-50">
      <div className="app__container">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="primary-heading text-center">
          OUR FEATURED {" "}
            <span className="highlight">BRANDING SERVICES</span>
          </h2>
        </div>
        <div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div variants={items}>
            <div className="single-feature-two sky-shape">
              <div className="h2-feature-icon shadow-lg sky-shadow bg-sky">
                <svg
                  id="Capa_1"
                  enable-background="new 0 0 512 512"
                  height="512"
                  viewBox="0 0 512 512"
                  width="512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m316 76c0-33.084-26.916-60-60-60s-60 26.916-60 60 26.916 60 60 60 60-26.916 60-60zm-60 40c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z" />
                    <path d="m346 266v-40c0-49.626-40.374-90-90-90s-90 40.374-90 90v40c0 5.523 4.478 10 10 10h160c5.522 0 10-4.477 10-10zm-20-10h-140v-30c0-38.598 31.402-70 70-70s70 31.402 70 70z" />
                    <path d="m71.858 408.114 48.142 24.067v53.819c0 5.523 4.478 10 10 10h106c5.522 0 10-4.477 10-10v-127.22c0-31.783-23.452-59.203-53.391-62.423-.795-.15-38.649-2.971-56.948-21.258l-27.38-27.379c-7.556-7.558-17.6-11.72-28.281-11.72v-80c0-22.056-17.944-40-40-40s-40 17.944-40 40v135.84c0 49.212 27.798 94.239 71.858 116.274zm-51.858-252.114c0-11.028 8.972-20 20-20s20 8.972 20 20v85.361c-12.196 7.052-20 20.2-20 34.639 0 10.68 4.162 20.723 11.719 28.28l51.21 51.22c3.903 3.905 10.236 3.907 14.142.001 3.905-3.905 3.906-10.236.001-14.142l-51.21-51.221c-3.78-3.779-5.862-8.8-5.862-14.138 0-8.464 5.357-16.044 13.332-18.861.003-.001.006-.003.009-.004h.001c6.88-2.439 15.066-1.005 20.797 4.726l27.383 27.383c18.65 18.637 45.831 23.879 68.836 26.986.037.004.075.009.113.013 19.923 2.142 35.529 20.827 35.529 42.537v117.22h-86v-50c0-3.788-2.141-7.251-5.528-8.944l-53.669-26.83c-37.504-18.757-60.803-56.456-60.803-98.386z" />
                    <circle cx="459" cy="384" r="10" />
                    <path d="m472 116c-22.056 0-40 17.944-40 40v80c-10.681 0-20.725 4.162-28.281 11.719l-27.377 27.377c-15.96 15.949-41.848 18.608-56.951 21.262-29.939 3.22-53.391 30.639-53.391 62.422v127.22c0 5.523 4.478 10 10 10h106c5.522 0 10-4.477 10-10v-53.819l32.73-16.362c4.939-2.47 6.942-8.476 4.473-13.417-2.469-4.939-8.474-6.942-13.416-4.473l-38.259 19.125c-3.387 1.695-5.528 5.158-5.528 8.946v50h-86v-117.22c0-21.71 15.606-40.395 35.529-42.538.038-.004.076-.008.113-.013 23.361-3.155 50.206-8.368 68.839-26.988l27.38-27.38c5.724-5.724 13.913-7.166 20.797-4.726h.001c.003.001.006.003.009.004 7.975 2.817 13.332 10.397 13.332 18.861 0 5.338-2.082 10.359-5.861 14.14l-51.21 51.22c-3.905 3.906-3.904 10.237.001 14.142 3.904 3.904 10.237 3.905 14.142-.001l51.21-51.22c7.556-7.558 11.718-17.601 11.718-28.281 0-14.439-7.804-27.587-20-34.639v-85.361c0-11.028 8.972-20 20-20s20 8.972 20 20v135.84c0 18.296-4.617 36.46-13.353 52.528-2.639 4.852-.844 10.924 4.009 13.562 4.851 2.637 10.924.843 13.562-4.009 10.325-18.99 15.782-40.458 15.782-62.081v-135.84c0-22.056-17.944-40-40-40z" />
                  </g>
                </svg>
              </div>
              <a href="/services/social-media-marketing">
              <div className="card-two-content">
                <div>
                  <div className="card-title">
                    <h3 className="text-2xl text-center font-bold py-7">
                      Social Media marketing
                    </h3>
                  </div> 
                  <p className="app__text">
                  With over 2.6 billion people worldwide actively engaging with social media, these platforms offer an unparalleled opportunity to promote your product globally.
                  </p>
                </div>
              </div>
              </a>
            </div>
          </div>

          <div variants={items}>
            <div className="single-feature-two red-shape">
              <div className="h2-feature-icon red-shadow bg-red shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="outline"
                  viewBox="0 0 512 512"
                  width="512"
                  height="512"
                >
                  <path d="M410.34277,18.34277,388.68555,40H360a8.00039,8.00039,0,0,0-8,8V76.68555L324.68555,104H296a8.00039,8.00039,0,0,0-8,8v28.68555L260.68555,168H232a8.00039,8.00039,0,0,0-8,8v28.68555L188.68652,240H161.33423a95.64587,95.64587,0,0,1,42.97925-64.91309l-8.627-13.47461A112.00943,112.00943,0,0,0,256,368H358.75293A152.11931,152.11931,0,0,1,256,408c-83.81348,0-152-68.18652-152-152H88a167.79394,167.79394,0,0,0,4.82446,40H32V216H96a8,8,0,0,0,7.39062-4.93848l12.92188-31.19629a8.00028,8.00028,0,0,0-1.7334-8.71875l-45.25586-45.2539,56.56934-56.56934,45.2539,45.25586a7.99745,7.99745,0,0,0,8.71875,1.7334l31.19629-12.92188A8,8,0,0,0,216,96V32h80V80h16V24a8.00039,8.00039,0,0,0-8-8H208a8.00039,8.00039,0,0,0-8,8V90.6543l-21.31934,8.831L131.5498,52.35254a8.0018,8.0018,0,0,0-11.31445,0L52.35254,120.23535a8.0018,8.0018,0,0,0,0,11.31445l47.13281,47.13086L90.6543,200H24a8.00039,8.00039,0,0,0-8,8v96a8.00039,8.00039,0,0,0,8,8H90.6543l8.831,21.31934L52.35254,380.4502a8.0018,8.0018,0,0,0,0,11.31445l67.88281,67.88281a8.0018,8.0018,0,0,0,11.31445,0l47.13086-47.13281L200,421.3457V488a8.00039,8.00039,0,0,0,8,8h96a8.00039,8.00039,0,0,0,8-8V421.3457l21.31934-8.83105,47.13086,47.13281a8.0018,8.0018,0,0,0,11.31445,0l67.88281-67.88281a8.00062,8.00062,0,0,0-.001-11.31445L447.19629,368H488a8.00039,8.00039,0,0,0,8-8V88a8.00039,8.00039,0,0,0-8-8H424a8.00039,8.00039,0,0,0-8,8v56H360a8.00039,8.00039,0,0,0-8,8v40H296a8.00039,8.00039,0,0,0-8,8v48H232a8.00039,8.00039,0,0,0-8,8v32H165.491A95.5652,95.5652,0,0,1,160,256h32a8.00235,8.00235,0,0,0,5.65723-2.34277L235.31445,216H264a8.00039,8.00039,0,0,0,8-8V179.31445L299.31445,152H328a8.00039,8.00039,0,0,0,8-8V115.31445L363.31445,88H392a8.00039,8.00039,0,0,0,8-8V51.31445L419.31348,32H496V16H416A8.00235,8.00235,0,0,0,410.34277,18.34277Zm-284.45019,424.334L69.32324,386.10742l43.04395-43.042a169.30277,169.30277,0,0,0,56.56738,56.56738ZM216,480V419.17554a167.97791,167.97791,0,0,0,80-.01514V480Zm226.67676-93.89258-56.56934,56.56934-43.032-43.03369A168.05664,168.05664,0,0,0,381.20654,368h43.36182ZM432,96h48V352H432V96Zm-64,64h48V352H368V160Zm-64,48h48V352H304V208Zm-64,56h48v88H256a96.21362,96.21362,0,0,1-16-1.34082V264Zm-16,40v42.509A96.52,96.52,0,0,1,172.887,304Zm32-104H240V184h16Zm64-64H304V120h16Zm64-64H368V56h16Z" />
                </svg>
              </div>
              <a href="/services/content-marketing">
              <div className="card-two-content">
                <div>
                  <div className="card-title">
                    <h3 className="text-2xl text-center font-bold py-7">
                      Content Marketing
                    </h3>
                  </div>
                  <p className="app__text">
                  Introducing people to a new product requires engaging content that educates your audience. Utilize infographics, maps, and other engaging content to clearly communicate your product&apos;s features and benefits.                  </p>
                </div>
              </div>
              </a>
            </div>
          </div>

          <div variants={items}>
            <div className="single-feature-two blue-shape">
              <div className="h2-feature-icon shadow-lg blue-shadow bg-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="512pt"
                  version="1.1"
                  viewBox="-7 0 511 512"
                  width="512pt"
                >
                  <g id="surface1">
                    <path
                      d="M 355.851562 266.285156 C 355.851562 262.144531 352.492188 258.785156 348.351562 258.785156 L 150.582031 258.785156 C 146.441406 258.785156 143.082031 262.144531 143.082031 266.285156 C 143.082031 270.429688 146.441406 273.785156 150.582031 273.785156 L 348.351562 273.785156 C 352.492188 273.785156 355.851562 270.429688 355.851562 266.285156 Z M 355.851562 266.285156 "
                      style={{
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "rgb(0%,0%,0%)",
                        fillOpacity: 1,
                      }}
                    />
                    <path
                      d="M 146.050781 92.90625 L 168.726562 182.472656 C 168.738281 182.519531 168.761719 182.5625 168.773438 182.609375 L 173.566406 201.53125 C 172.527344 202.292969 171.535156 203.140625 170.597656 204.078125 C 165.617188 209.042969 162.863281 215.648438 162.851562 222.683594 C 162.839844 229.714844 165.566406 236.332031 170.53125 241.316406 C 175.671875 246.46875 182.429688 249.046875 189.1875 249.046875 C 195.914062 249.046875 202.640625 246.492188 207.773438 241.382812 C 213.113281 236.058594 215.679688 228.996094 215.488281 221.996094 L 284.136719 222.117188 C 283.925781 229.109375 286.46875 236.175781 291.785156 241.507812 C 296.75 246.492188 303.359375 249.242188 310.390625 249.253906 C 310.40625 249.253906 310.421875 249.253906 310.4375 249.253906 C 317.453125 249.253906 324.054688 246.527344 329.023438 241.574219 C 334.007812 236.609375 336.757812 230 336.769531 222.96875 C 336.78125 215.933594 334.054688 209.316406 329.089844 204.335938 C 318.839844 194.050781 302.136719 194.019531 291.847656 204.269531 C 290.941406 205.171875 290.117188 206.128906 289.371094 207.125 L 210.289062 206.984375 C 209.550781 205.996094 208.734375 205.042969 207.835938 204.140625 C 202.339844 198.621094 194.980469 196.0625 187.753906 196.453125 L 185.648438 188.148438 L 318.050781 188.367188 C 318.058594 188.367188 318.066406 188.367188 318.074219 188.367188 C 324.277344 188.367188 329.6875 184.175781 331.230469 178.164062 L 351.097656 100.84375 C 352.148438 96.75 351.265625 92.488281 348.679688 89.148438 C 346.09375 85.804688 342.1875 83.886719 337.960938 83.878906 L 159.171875 83.574219 L 156.386719 72.582031 C 155.265625 68.148438 152.058594 64.5 147.816406 62.816406 L 116.222656 50.28125 C 112.371094 48.757812 108.011719 50.636719 106.484375 54.488281 C 104.957031 58.339844 106.839844 62.695312 110.6875 64.226562 L 141.9375 76.621094 L 146.007812 92.695312 C 146.027344 92.769531 146.03125 92.839844 146.050781 92.90625 Z M 302.4375 214.894531 C 304.644531 212.695312 307.542969 211.597656 310.4375 211.597656 C 313.347656 211.597656 316.257812 212.707031 318.464844 214.925781 C 320.601562 217.070312 321.777344 219.914062 321.769531 222.945312 C 321.765625 225.96875 320.582031 228.8125 318.4375 230.949219 C 316.296875 233.082031 313.460938 234.257812 310.4375 234.257812 C 310.433594 234.257812 310.425781 234.257812 310.417969 234.257812 C 307.390625 234.25 304.546875 233.066406 302.410156 230.925781 C 300.273438 228.777344 299.101562 225.933594 299.105469 222.902344 C 299.113281 219.875 300.292969 217.03125 302.4375 214.894531 Z M 197.210938 214.730469 C 201.621094 219.15625 201.609375 226.347656 197.183594 230.757812 C 192.757812 235.167969 185.570312 235.152344 181.15625 230.730469 C 179.019531 228.585938 177.847656 225.738281 177.851562 222.710938 C 177.859375 219.683594 179.042969 216.839844 181.1875 214.703125 C 185.613281 210.292969 192.800781 210.304688 197.210938 214.730469 Z M 336.117188 98.875 L 316.976562 173.367188 L 181.851562 173.140625 L 162.972656 98.582031 Z M 336.117188 98.875 "
                      style={{
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "rgb(0%,0%,0%)",
                        fillOpacity: 1,
                      }}
                    />
                    <path
                      d="M 285.640625 160.914062 C 286.304688 161.097656 286.972656 161.183594 287.632812 161.183594 C 290.921875 161.183594 293.945312 159 294.859375 155.671875 L 304.128906 121.9375 C 305.226562 117.941406 302.878906 113.8125 298.886719 112.71875 C 294.890625 111.613281 290.761719 113.964844 289.664062 117.960938 L 280.394531 151.695312 C 279.296875 155.6875 281.644531 159.816406 285.640625 160.914062 Z M 285.640625 160.914062 "
                      style={{
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "rgb(0%,0%,0%)",
                        fillOpacity: 1,
                      }}
                    />
                    <path
                      d="M 202.488281 155.671875 C 203.40625 159 206.425781 161.183594 209.71875 161.183594 C 210.375 161.183594 211.046875 161.097656 211.710938 160.914062 C 215.703125 159.816406 218.050781 155.6875 216.953125 151.695312 L 207.683594 117.960938 C 206.585938 113.96875 202.457031 111.613281 198.464844 112.71875 C 194.472656 113.8125 192.121094 117.941406 193.21875 121.9375 Z M 202.488281 155.671875 "
                      style={{
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "rgb(0%,0%,0%)",
                        fillOpacity: 1,
                      }}
                    />
                    <path
                      d="M 248.675781 161.183594 C 252.816406 161.183594 256.175781 157.824219 256.175781 153.683594 L 256.175781 119.949219 C 256.175781 115.804688 252.816406 112.449219 248.675781 112.449219 C 244.53125 112.449219 241.175781 115.804688 241.175781 119.949219 L 241.175781 153.683594 C 241.175781 157.824219 244.53125 161.183594 248.675781 161.183594 Z M 248.675781 161.183594 "
                      style={{
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "rgb(0%,0%,0%)",
                        fillOpacity: 1,
                      }}
                    />
                    <path
                      d="M 498.394531 214.503906 C 498.328125 213.203125 498.171875 211.84375 497.921875 210.441406 C 497.921875 210.4375 497.921875 210.429688 497.917969 210.421875 C 497.777344 209.628906 497.601562 208.847656 497.414062 208.066406 C 497.371094 207.890625 497.324219 207.714844 497.28125 207.539062 C 497.074219 206.742188 496.847656 205.953125 496.589844 205.175781 C 496.320312 204.363281 496.015625 203.566406 495.695312 202.773438 C 495.65625 202.683594 495.621094 202.59375 495.585938 202.5 C 493.011719 196.332031 488.820312 190.820312 483.332031 186.53125 L 444.617188 156.28125 L 444.617188 26.058594 C 444.617188 11.6875 432.925781 0 418.558594 0 L 80.378906 0 C 66.007812 0 54.316406 11.6875 54.316406 26.058594 L 54.316406 156.164062 L 15.558594 186.550781 C 9.984375 190.921875 5.753906 196.558594 3.199219 202.867188 C 3.183594 202.910156 3.164062 202.953125 3.148438 202.996094 C 2.546875 204.503906 2.039062 206.054688 1.632812 207.632812 C 1.589844 207.796875 1.546875 207.960938 1.507812 208.128906 C 1.320312 208.886719 1.152344 209.648438 1.015625 210.417969 C 0.675781 212.347656 0.5 214.195312 0.5 215.917969 L 0.5 489.753906 C 0.5 495.648438 2.808594 501.011719 6.5625 504.996094 C 6.574219 505.003906 6.582031 505.015625 6.589844 505.027344 C 6.617188 505.054688 6.644531 505.078125 6.667969 505.105469 C 6.886719 505.335938 7.109375 505.558594 7.335938 505.773438 C 7.378906 505.816406 7.417969 505.855469 7.460938 505.894531 C 7.703125 506.125 7.953125 506.347656 8.203125 506.566406 C 8.226562 506.585938 8.246094 506.605469 8.265625 506.621094 C 12.160156 509.96875 17.21875 512 22.746094 512 L 476.1875 512 C 476.847656 512 477.5 511.964844 478.144531 511.910156 C 478.199219 511.902344 478.253906 511.902344 478.304688 511.898438 C 478.945312 511.835938 479.574219 511.746094 480.195312 511.632812 C 480.246094 511.621094 480.300781 511.613281 480.355469 511.601562 C 480.988281 511.484375 481.609375 511.335938 482.222656 511.160156 C 482.261719 511.152344 482.296875 511.140625 482.335938 511.128906 C 482.964844 510.945312 483.585938 510.738281 484.191406 510.503906 C 484.210938 510.496094 484.226562 510.488281 484.246094 510.484375 C 492.539062 507.246094 498.433594 499.179688 498.433594 489.753906 L 498.433594 215.917969 C 498.433594 215.457031 498.421875 214.984375 498.394531 214.503906 Z M 444.617188 175.316406 L 474.09375 198.351562 C 475.292969 199.289062 476.390625 200.316406 477.382812 201.417969 L 444.617188 227.027344 Z M 69.316406 26.058594 C 69.316406 19.960938 74.277344 15 80.378906 15 L 418.558594 15 C 424.65625 15 429.617188 19.960938 429.617188 26.058594 L 429.617188 238.746094 L 259.90625 371.371094 C 253.535156 376.347656 244.640625 376.339844 238.277344 371.351562 L 69.316406 238.878906 Z M 24.8125 198.355469 L 54.316406 175.222656 L 54.316406 227.117188 L 21.535156 201.417969 C 22.523438 200.316406 23.617188 199.292969 24.8125 198.355469 Z M 483.433594 488.507812 C 460.996094 469.433594 410.878906 426.863281 363.503906 386.925781 C 360.335938 384.257812 355.605469 384.660156 352.9375 387.828125 C 350.265625 390.992188 350.667969 395.726562 353.835938 398.394531 C 398.890625 436.375 446.4375 476.746094 470.265625 497 L 27.070312 497 C 52.257812 475.746094 98.515625 436.757812 142.445312 399.984375 C 145.621094 397.324219 146.042969 392.59375 143.382812 389.417969 C 140.726562 386.242188 135.996094 385.820312 132.820312 388.480469 C 87.730469 426.226562 40.207031 466.285156 15.5 487.136719 L 15.5 215.917969 C 15.5 215.867188 15.507812 215.804688 15.507812 215.753906 L 182.703125 346.867188 C 175.597656 352.769531 168.125 358.992188 160.429688 365.410156 C 157.246094 368.0625 156.820312 372.792969 159.472656 375.972656 C 160.957031 377.753906 163.089844 378.671875 165.234375 378.671875 C 166.929688 378.671875 168.632812 378.101562 170.035156 376.929688 C 178.632812 369.757812 186.941406 362.84375 194.78125 356.335938 L 229.027344 383.183594 C 234.933594 387.816406 242.019531 390.132812 249.105469 390.132812 C 256.171875 390.132812 263.242188 387.828125 269.144531 383.214844 L 303.652344 356.246094 C 310.863281 362.273438 318.472656 368.648438 326.332031 375.25 C 327.738281 376.433594 329.449219 377.007812 331.152344 377.007812 C 333.289062 377.007812 335.414062 376.097656 336.898438 374.332031 C 339.5625 371.160156 339.152344 366.429688 335.980469 363.765625 C 329.003906 357.90625 322.222656 352.222656 315.742188 346.804688 L 483.425781 215.738281 C 483.429688 215.796875 483.4375 215.863281 483.4375 215.921875 L 483.4375 488.507812 Z M 483.433594 488.507812 "
                      style={{
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "rgb(0%,0%,0%)",
                        fillOpacity: 1,
                      }}
                    />
                  </g>
                </svg>
              </div>
              <a href="/services/seo-service">
              <div className="card-two-content animate get-bottom">
                <div>
                  <div className="card-title">
                    <h3 className="text-2xl text-center font-bold py-7">
                    SEO Services
                    </h3>
                  </div>
                  <p className="app__text">
                  With over 70% of online experiences beginning with a search engine, SEO is critical for increasing visibility and driving website traffic. Mitochon Digital optimizes your online presence to improve search rankings and attract more qualified leads to your site.
                                    </p>
                </div>
              </div>
              </a>
            </div>
          </div>

          <div variants={items}>
            <div className="single-feature-two indigo-shape">
              <div className="h2-feature-icon indigo-shadow bg-indigo shadow-lg">
                <svg
                  id="Layer_5"
                  enable-background="new 0 0 64 64"
                  height="512"
                  viewBox="0 0 64 64"
                  width="512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m43.525 13.474 1.76-.952c-2.512-4.64-7.346-7.522-12.618-7.522h-.667v2h.667c4.537 0 8.698 2.48 10.858 6.474z" />
                    <path d="m30.16 7.056-.193-1.99c-.726.07-1.45.197-2.154.377l.496 1.938c.604-.155 1.227-.264 1.851-.325z" />
                    <path d="m61.683 15.622-8.683-5.426v4.804h-2.534c-1.978-8.157-9.323-14-17.799-14h-1.334c-6.873 0-13.203 3.908-16.321 10h-4.012v-4.804l-8.683 5.426c-.825.516-1.317 1.405-1.317 2.378s.492 1.862 1.317 2.378l8.683 5.426v-4.804h2.166c-.098.773-.166 1.552-.166 2.333 0 3.919 1.271 7.712 3.553 10.83l-1.326 1.326 1.231 2.461c-.819 1.403-1.44 2.899-1.852 4.46l-2.606.869v7.441l2.606.869c.411 1.561 1.032 3.057 1.852 4.46l-1.231 2.461 5.263 5.262 2.461-1.23c1.403.819 2.899 1.44 4.46 1.851l.868 2.607h7.441l.869-2.606c1.561-.411 3.057-1.032 4.46-1.851l2.461 1.23 5.263-5.262-1.231-2.461c.819-1.403 1.44-2.899 1.852-4.46l2.606-.869v-7.441l-2.606-.869c-.411-1.561-1.032-3.057-1.852-4.46l1.231-2.461-1.324-1.324c1.95-2.671 3.145-5.855 3.451-9.165h2.1v4.804l8.683-5.426c.825-.517 1.317-1.406 1.317-2.379s-.492-1.862-1.317-2.378zm-30.35-12.622h1.334c7.388 0 13.819 4.98 15.744 12h-12.411c-1.13 0-2.162.391-3 1.026v-.026c0-2.757-2.243-5-5-5h-10.706c2.921-4.903 8.264-8 14.039-8zm7.667 38c.552 0 1 .449 1 1s-.448 1-1 1h-14c-.552 0-1-.449-1-1s.448-1 1-1zm2.683-5.066c1.499 2.049 2.317 4.521 2.317 7.066 0 3.542-1.552 6.72-4 8.919v-3.103c1.161-.414 2-1.514 2-2.816 0-.771-.301-1.468-.78-2 .48-.532.78-1.229.78-2 0-1.279-.808-2.366-1.938-2.796.173-1.233.74-2.382 1.621-3.27zm-19.366 0c.881.888 1.448 2.037 1.621 3.27-1.13.43-1.938 1.517-1.938 2.796 0 .771.301 1.468.78 2-.48.532-.78 1.229-.78 2 0 1.302.839 2.402 2 2.816v3.103c-2.448-2.198-4-5.377-4-8.919 0-2.545.818-5.017 2.317-7.066zm17.683 10.066c0 .551-.448 1-1 1h-14c-.552 0-1-.449-1-1s.448-1 1-1h14c.552 0 1 .449 1 1zm-14 3h12v4.376c-1.767 1.026-3.813 1.624-6 1.624s-4.233-.598-6-1.624zm-17-34v3.196l-5.622-3.514c-.236-.148-.378-.403-.378-.682s.142-.534.378-.682l5.622-3.514v3.196h19c1.654 0 3 1.346 3 3v4 19h-2v-22c0-1.103-.897-2-2-2zm6.185 2h11.815v22h-1.072c-.237-1.817-1.105-3.513-2.474-4.758l-3.106-2.825c-3.4-3.087-5.348-7.493-5.348-12.084 0-.782.074-1.561.185-2.333zm31.155 14.884-1.084 2.168.298.476c.948 1.514 1.63 3.156 2.026 4.881l.126.547 2.294.765v4.559l-2.294.765-.126.547c-.396 1.725-1.078 3.367-2.026 4.881l-.298.476 1.084 2.168-3.224 3.223-2.167-1.083-.477.298c-1.514.949-3.156 1.63-4.881 2.026l-.548.125-.764 2.294h-4.559l-.765-2.294-.548-.125c-1.725-.396-3.367-1.078-4.881-2.026l-.477-.298-2.167 1.083-3.224-3.223 1.084-2.168-.298-.476c-.948-1.514-1.63-3.156-2.026-4.881l-.126-.547-2.292-.766v-4.559l2.294-.765.126-.547c.396-1.725 1.078-3.367 2.026-4.881l.298-.476-1.084-2.168.17-.17c.374.408.759.808 1.171 1.183l1.845 1.677c-1.837 2.428-2.846 5.38-2.846 8.427 0 7.72 6.28 14 14 14s14-6.28 14-14c0-3.047-1.009-5.999-2.846-8.425l1.845-1.677c.412-.374.8-.772 1.174-1.181zm-2.687-.466-3.106 2.824c-1.369 1.245-2.237 2.941-2.474 4.758h-1.073v-18h11.895c-.413 3.971-2.277 7.723-5.242 10.418zm16.969-12.736-5.622 3.514v-3.196h-18c-1.103 0-2 .897-2 2v18h-2v-19c0-1.654 1.346-3 3-3h19v-3.196l5.622 3.514c.236.148.378.403.378.682s-.142.534-.378.682z" />
                  </g>
                </svg>
              </div>
              <a href="/services/analytics-and-reporting">
              <div className="card-two-content">
                <div>
                  <div className="card-title">
                    <h3 className="text-2xl text-center font-bold py-7">
                    Analytics & Reporting
                    </h3>
                  </div>
                  <p className="app__text">
                  Informed decision-making is key to successful marketing strategies. At Mitochon Digital, we provide comprehensive analytics and reporting that track your campaigns&apos; performance, allowing for data-driven adjustments that boost efficiency and ROI.
                  </p>
                </div>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing;
