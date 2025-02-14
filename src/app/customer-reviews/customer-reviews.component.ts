import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-reviews',
  imports: [CommonModule],
  templateUrl: './customer-reviews.component.html',
  styleUrl: './customer-reviews.component.css'
})
export class CustomerReviewsComponent {
  reviews = [
    {
      title: "Very proud owner of a Fuja machine",
      author: "Caralynn K",
      date: "2023-02-21",
      content: "I have been embroidering apparel for over 20 years using happy 6 heads industrial embroidery machines. Fuja machine looks marvelous and I like the lime green color. You are the BEST company to work with. You have always been available every time I ask for help. That is amazing customer service! I am very happy to be an independent woman and you helped me! I am very proud owner of a Fuja machine yay! Thank you!"
    },
    {
      title: "Durable machine for 20hours a day",
      author: "Rimmon P",
      date: "2023-02-08",
      content: "FUJA is very good. The machine is really durable. At least in a day I use the machine for like 20 hours and this is still looking fresh and clean. I love FUJA. I maintain this machine well. I want to be an ambassador of FUJA. I don't mind how long it takes me to get there. I'll surely be. I love the machine and I love the job too. Thanks!"
    },
    {
      title: "Happy with machine performance",
      author: "Julian Costa B",
      date: "2023-01-15",
      content: "Hola Clair, Se me hab&iacute;a olvidado enviarte las fotos, como ver&aacute;s hasta el perro quiere bordar con la m&aacute;quina. Estoy muy contento de c&oacute;mo trabaja la m&aacute;quina. Y estamos muy contentos tambi&eacute;n de haberte conocido. Un fuerte abrazo!"
    },
    {
      title: "Be User-friendly for beginners",
      author: "Richard S",
      date: "2022-12-24",
      content: "We are satisfied with our new machine 'FJ1501CS Embroidery Machine'. I did a ton of research before buying an embroidery machine and FUJA was definitely the best option. The machine arrived before the estimated time, the manuals and video tutorials are excellent for beginners even without experience. And, what we liked the most, the entire FUJA team is always aware of everything that is being done, helping at every step. In a week we already had everything ready and working with the machine. Quality, experience, guarantee and the best support with the best team is the experience we have had. Thank you so much!"
    },
    {
      title: "Helpful team with good service",
      author: "Malicka G",
      date: "2022-12-08",
      content: "This is my third embroidery machine. I can maintain my FUJA myself. Plus the cost was about half what I paid for my top of the line. If I run into trouble I can send a text and get help I've always received an answer in less than three hours. Who does that, FUJA does. Recently Lucy and the engineer Mr. Yin helped me solve a problem I was having. They told me what to do showed me videos, ones that I had watched before trying to figure this out myself but they gave me pointers that made all the difference and confidence that I could do it. Thanks!"
    },
    {
      title: "Delivered in excellent condition",
      author: "Giovanna F",
      date: "2022-11-18",
      content: "Machine delivered in excellent condition and was very well packaged. Putting the base together is pretty straightforward. I was able to assemble it on my own. Have been very thoroughly training myself with videos via YouTube as well the manual that comes with it. I am taking my time to understand all the facets of it because it is a large investment. The support staff has been fantastic. Although I haven't personally needed one-on-one help thus far, I have been watching social media posts of others with questions and the turn around time from FUJA seems great. You will need to purchase software for it. Would highly recommend this machine to anyone that may be uncertain of it versus other machines."
    },
    {
      title: "Happy with this purchase",
      author: "Emmanuel T",
      date: "2022-11-04",
      content: "Very happy with this purchase. I have previous experience with single head embroidery machine but was ready to upgrade. This machine is as impressive as pictured. I like the green color. It has not disappointed and has run great since day one. When I placed the order, I was immediately set up with a support person who kept me updated through the shipping process and has been there for me since. She has been very responsive. I was worried about the time difference but so far it hasn't been a problem. I would definitely buy again in the future."
    },
    {
      title: "No thread shredded",
      author: "Sergio V",
      date: "2022-07-20",
      content: "I'm not new to the world of embroidery. After a ton of research, I decided to purchase the FUJA 15 needles embroidery machine. The item arrived nicely packaged and secure in a crate. There weren't any damaged or missing items. There are plenty of instructional videos online. It was simple to put together after watching the video. I've stitched a few projects with ease using different brands of thread. The machine hasn't shredded any brands of thread I've tested. The variable speed feature is a great plus!"
    }
  ];
}
