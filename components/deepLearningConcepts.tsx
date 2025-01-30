import React, { ReactComponentElement } from 'react'
import 'react-vertical-timeline-component/style.min.css';
import styles from "./css/Concepts.module.css";
import Image from 'next/image';


const DeepLearningPage = () => {
  const concepts = [
    {
      title: "AlexNet - Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012)",
      link: "https://github.com/kvktran2812/computer-vision/blob/main/scripts/alex_net.py",
      desc: 
      <div>
        Very old school model for image classification. Proof of concept that deep convolutional networks can significantly outperform traditional machine learning methods on large-scale image datasets
      </div>,
    },
    {
      title: "Inception model - Christian Szegedy et al, 2014",
      link: "https://github.com/kvktran2812/computer-vision/blob/main/scripts/res_net.py",
      desc: 
      <div>
        InceptionNet was introduced in 2014 and won the ImageNet Challenge (ILSVRC-2014) by significantly improving computational efficiency and accuracy. Unlike traditional CNNs, it introduced the Inception module, which uses multi-scale convolutions in parallel to extract features at different levels.
      </div>,
    },
    {
      title: "ResNet - He et al., 2015",
      link: "https://github.com/kvktran2812/computer-vision/blob/main/scripts/res_net.py",
      desc: 
      <div>
        ResNet revolutionized deep learning by introducing residual connections to address the vanishing gradient problem in very deep networks
      </div>,
    },
    {
      title: "InceptionV4 and Inception ResNet V2 models - Christian Szegedy et al, 2016",
      link: "https://github.com/kvktran2812/computer-vision/blob/main/scripts/inception_v4.py",
      desc: 
      <div>
        Inception-v4 is an enhanced version of the Inception architecture, incorporating residual connections to improve training efficiency. Training very deep model with multiple conv layers.
      </div>,
    },
    {
      title: "MobileNet- Andrew G. Howard et al, 2017",
      link: "https://github.com/kvktran2812/computer-vision/blob/main/scripts/mobile_net.py",
      desc: 
      <div>
        MobileNet is a lightweight deep learning architecture optimized for mobile and embedded vision applications. Introduced in 2017, it uses depthwise separable convolutions to reduce the number of parameters and computational cost while maintaining high accuracy
      </div>,
    },
    {
      title: "SENet - Jie Hu et al, 2018",
      link: "https://github.com/kvktran2812/computer-vision/blob/main/scripts/se_net.py",
      desc: 
      <div>
        MobileNet is a lightweight deep learning architecture optimized for mobile and embedded vision applications. Introduced in 2017, it uses depthwise separable convolutions to reduce the number of parameters and computational cost while maintaining high accuracy
      </div>,
    },
    {
      title: "EfficientNet - Mingxing Tan and Quoc V. Le",
      link: "https://github.com/kvktran2812/computer-vision/blob/main/scripts/efficient_net.py",
      desc: 
      <div>
        EfficientNet is a family of CNN models designed to optimize accuracy and efficiency by using a novel compound scaling method.
      </div>,
    },
  ]
 
  return (
    <div id="deep-learning-concepts" className={styles.deepLearning}>
      <h1>Deep Learning Concepts</h1>
      <p>These are some of the deep learning famous models, architectures, and algorithms that I re-implemented from scratch from multiple research papers.
        Often when I learn new deep learning knowledge, I try to replicate it to understand how it works from the smallest detail.
      </p>
      {concepts.map((concept, index) => (
          <div key={index} className={styles.projectItem}>
            <div className={styles.desc}>
              <a href={concept.link}><b>{concept.title}</b></a>
              {concept.desc}
            </div>
          </div>
      ))}
    </div>
  )
}

export default DeepLearningPage