import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  videos = [
    {img: '/assets/video_img/daily_maintenence.avif', url: 'https://play.video.alibaba.com/global/play/6000283906987.mp4?spm=a2700.shop_oth.74.1.4e293fe6ReTpDp&dft=hd'},
    {img: '/assets/video_img/Tshirt_emb_tut.avif', url: 'https://play.video.alibaba.com/global/play/6000283912027.mp4?spm=a2700.shop_oth.74.2.4e293fe6ReTpDp&dft=hd'},
    {img: '/assets/video_img/Threading_1.avif', url: 'https://play.video.alibaba.com/global/play/6000283912059.mp4?spm=a2700.shop_oth.74.3.4e293fe6ReTpDp&dft=hd'},
    {img: '/assets/video_img/Threading_2.avif', url: 'https://play.video.alibaba.com/global/play/6000283910651.mp4?spm=a2700.shop_oth.74.4.4e293fe6ReTpDp&dft=hd'},
    {img: '/assets/video_img/Make_machine.avif', url: 'https://play.video.alibaba.com/global/play/6000283910663.mp4?spm=a2700.shop_oth.74.5.4e293fe6ReTpDp&dft=hd'},
    {img: '/assets/video_img/needle_replace.avif', url: 'https://play.video.alibaba.com/global/play/6000283908862.mp4?spm=a2700.shop_oth.74.6.4e293fe6ReTpDp&dft=hd'},
    {img: '/assets/video_img/assembly.avif', url: 'https://play.video.alibaba.com/global/play/6000283910706.mp4?spm=a2700.shop_oth.74.7.4e293fe6ReTpDp&dft=hd'},
    {img: '/assets/video_img/cap_emb_tut.avif', url: 'https://play.video.alibaba.com/global/play/6000283912419.mp4?spm=a2700.shop_oth.74.8.4e293fe6ReTpDp&dft=hd'},
    {img: '/assets/video_img/flat_emb_tut.avif', url: 'https://play.video.alibaba.com/global/play/6000283908915.mp4?spm=a2700.shop_oth.74.9.4e293fe6ReTpDp&dft=hd'},
  ]
}
