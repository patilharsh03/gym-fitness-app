import { SelectedPage, ClassType } from "../shared/types";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import { motion } from "framer-motion";
import HText from "../shared/HText";
import Class from "../shared/Class";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Our weight training classes are designed to help you build strength and tone your body. With a range of weight training equipment and expert trainers, you can push yourself to new limits and achieve your fitness goals. Whether you're a beginner or an experienced lifter, our classes offer a challenging and rewarding workout that will leave you feeling strong and energized.",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description: "Our gym offers a variety of yoga classes to help you improve your flexibility, strength, and mindfulness. Whether you're a beginner or an experienced yogi, our certified instructors will guide you through each pose, leaving you feeling refreshed and rejuvenated. Join our yoga community and find your inner peace today.",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description: "Our gym offers challenging and effective ab core classes led by experienced trainers. Whether you are looking to tone your midsection or strengthen your core muscles for better posture, our classes are designed to help you achieve your fitness goals. Join us for a fun and dynamic workout that will leave you feeling stronger and more energized.",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description: "Our gym offers adventure classes that will take your fitness routine to the next level. Get ready to explore the great outdoors with our experienced trainers, who will guide you through exciting activities such as hiking, rock climbing, and more. These classes are perfect for those looking to challenge themselves and add a little adventure to their workout routine.",
        image: image4,
    },
    {
        name: "Fitness Classes",
        description: "Our gym offers a variety of fitness classes to cater to your every need. From high-intensity cardio to strength training, our classes are designed to help you achieve your fitness goals. Our expert trainers are passionate about fitness and are dedicated to helping you reach your full potential. Join our fitness classes and start your journey to a healthier you today.",
        image: image5,
    },
    {
        name: "Training Classes",
        description: "Our gym offers a variety of fitness classes to cater to your every need. From high-intensity cardio to strength training, our classes are designed to help you achieve your fitness goals. Our expert trainers are passionate about fitness and are dedicated to helping you reach your full potential. Join our fitness classes and start your journey to a healthier you today.",
        image: image6,
    },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
                <Class 
                    key={`${item.name}-${index}`}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
