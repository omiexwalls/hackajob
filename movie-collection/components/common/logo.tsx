import enLogoSrc from '@/assets/logo-en.svg';
import esLogoSrc from '@/assets/logo-es.svg';
import Link from 'next/link';
import { useLocale } from 'next-intl';

function EnLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 861.667 470" height="100%">
      <g fill="#ff8f1c" strokeMiterlimit="10" fontFamily="none" fontSize="none">
        <path d="M48.491 173.138c-9.508 0-15.637 5.889-15.637 17.28s6.129 17.28 15.637 17.28c9.51 0 15.59-5.889 15.59-17.28s-6.079-17.28-15.588-17.28m0 27.417c-5.02 0-7.238-3.478-7.238-10.136 0-6.709 2.218-10.136 7.238-10.136s7.24 3.426 7.24 10.136c0 6.658-2.221 10.136-7.24 10.136m58.012-27.031h-8.063v19.547l-12.067-19.547h-7.626v33.786h8.11v-19.597l11.682 19.597h7.964zm23.956 26.642v-26.642h-8.11v33.786h21.383v-7.144zm41.771-4.825 12.307-21.815h-9.073l-7.24 14.577-7.287-14.577h-9.073l12.307 21.815v11.969h8.06zm76.03-21.817h-26.306v7.191h9.123v26.595h8.11v-26.595h9.073zm34.39 0v13.708H270.73v-13.708h-8.107v33.786h8.11v-13.755h11.922v13.755h8.107v-33.786zm31.537 26.642v-6.611h11.536v-6.709h-11.536v-6.178h14.431v-7.144h-22.539v33.786h23.023v-7.144zm68.093.388c-4.97 0-7.144-3.476-7.144-10.136 0-6.709 2.174-10.136 7.144-10.136 3.426 0 4.923.869 6.324 4.152h7.818c-.867-7.724-7.334-11.294-14.286-11.294-9.315 0-15.395 5.889-15.395 17.28s6.079 17.28 15.395 17.28c7.001 0 13.515-3.572 14.335-11.39h-7.818c-1.351 3.379-2.898 4.246-6.371 4.246m36.642-.39v-26.642h-8.107v33.786h21.383v-7.144zm50.598 7.144h8.784l-13.418-33.786h-6.564l-13.369 33.786h8.737l1.882-5.551h12.067zm-11.922-11.437 4.007-11.583 4.007 11.583zm48.723-8.738-5.165-1.206c-2.655-.674-3.09-1.786-3.09-3.039 0-1.351 1.206-2.801 4.681-2.801 2.559 0 4.827.435 5.215 3.283h8.303c-.724-7.048-6.274-10.23-13.515-10.23-7.722 0-13.08 3.523-13.08 9.506 0 6.613 4.684 8.592 10.328 9.896l4.296 1.013c3.283.773 4.538 1.69 4.538 4.103 0 2.075-2.075 3.088-5.938 3.088-3.812 0-5.405-1.497-5.84-4.392h-8.397c.627 7.529 6.079 11.343 14.14 11.343 7.529 0 14.431-3.041 14.431-9.992 0-5.793-3.041-8.735-10.909-10.57m42.459-.002-5.163-1.206c-2.653-.674-3.09-1.786-3.09-3.039 0-1.351 1.206-2.801 4.684-2.801 2.557 0 4.825.435 5.212 3.283h8.303c-.724-7.048-6.274-10.23-13.515-10.23-7.724 0-13.082 3.523-13.082 9.506 0 6.613 4.684 8.592 10.331 9.896l4.296 1.013c3.281.773 4.535 1.69 4.535 4.103 0 2.075-2.075 3.088-5.936 3.088-3.814 0-5.405-1.497-5.84-4.392h-8.397c.627 7.529 6.082 11.343 14.14 11.343 7.532 0 14.431-3.041 14.431-9.992 0-5.793-3.039-8.735-10.909-10.57m33.791 20.173v-33.786h-8.11v33.786zm30.075-6.756c-4.97 0-7.144-3.476-7.144-10.136 0-6.709 2.174-10.136 7.144-10.136 3.429 0 4.923.869 6.324 4.152h7.818c-.869-7.724-7.337-11.294-14.288-11.294-9.313 0-15.395 5.889-15.395 17.28s6.082 17.28 15.397 17.28c6.998 0 13.515-3.572 14.335-11.39h-7.818c-1.351 3.379-2.898 4.246-6.371 4.246m45.257-13.421-5.165-1.206c-2.653-.674-3.088-1.786-3.088-3.039 0-1.351 1.206-2.801 4.681-2.801 2.559 0 4.825.435 5.212 3.283h8.303c-.726-7.048-6.277-10.23-13.515-10.23-7.724 0-13.08 3.523-13.08 9.506 0 6.613 4.681 8.592 10.328 9.896l4.296 1.013c3.283.773 4.538 1.69 4.538 4.103 0 2.075-2.075 3.088-5.938 3.088-3.812 0-5.405-1.497-5.84-4.392h-8.399c.627 7.529 6.082 11.343 14.142 11.343 7.529 0 14.431-3.041 14.431-9.992 0-5.793-3.039-8.735-10.906-10.57" />
        <path
          d="M60.466 52.287H29.345a.125.125 0 0 0-.122.125v45.066c0 .068.054.122.122.122h31.121c4.731 0 9.247-1.433 13.059-4.148a22.7 22.7 0 0 0 9.597-18.511c0-12.493-10.164-22.656-22.656-22.656m2.435 68.716q-.04-.063-.11-.059a45 45 0 0 1-2.324.059H29.345a.125.125 0 0 0-.122.125v25.909c0 .068.054.122.122.122h49.51a.122.122 0 0 0 .106-.188zm144.701-68.467a.125.125 0 0 0 .125-.125V28.754a.125.125 0 0 0-.125-.125H106.649l-.007.002H60.466a.125.125 0 0 0 0 .247c25.396 0 46.06 20.661 46.06 46.06a45.94 45.94 0 0 1-20.692 38.439.125.125 0 0 0-.038.167l20.748 33.551.014.007a.12.12 0 0 0 .073.04c.007 0 .012.012.021.012l.021-.002h100.935a.125.125 0 0 0 .125-.125v-23.653a.125.125 0 0 0-.125-.125h-77.174V99.841h53.528a.125.125 0 0 0 .125-.125V76.068a.125.125 0 0 0-.125-.125h-53.529V52.537zm15.224.007h38.524v94.498c0 .068.056.122.125.122h23.655a.125.125 0 0 0 .122-.122v-94.5h38.528a.125.125 0 0 0 .122-.122V28.76a.125.125 0 0 0-.122-.122H222.826a.125.125 0 0 0-.125.125v23.655c0 .068.054.122.125.122m116.186 94.626h23.65a.125.125 0 0 0 .122-.125v-25.787h30.996q1.14 0 2.263-.056l16.02 25.909a.12.12 0 0 0 .106.059h27.793a.12.12 0 0 0 .108-.063.12.12 0 0 0-.002-.125l-20.685-33.452a46.18 46.18 0 0 0 20.701-38.575c0-25.533-20.774-46.307-46.307-46.307h-54.769a.125.125 0 0 0-.125.125v118.273a.125.125 0 0 0 .125.125m67.687-53.909a22.16 22.16 0 0 1-12.918 4.103h-30.996V52.539h30.996c12.359 0 22.412 10.056 22.412 22.412a22.44 22.44 0 0 1-9.492 18.309m102.286 3.304V28.762a.125.125 0 0 0-.125-.125h-53.665a.125.125 0 0 0-.122.125v67.802c0 14.861 12.091 26.952 26.95 26.952 14.868 0 26.962-12.091 26.962-26.952m124.578-67.873a.12.12 0 0 0-.101-.052h-24.832a.12.12 0 0 0-.12.087l-25.526 79.329-25.526-79.329a.12.12 0 0 0-.115-.087h-24.835l-.007.007-.016-.002a.12.12 0 0 0-.073.047h-.002l-.002.012a.2.2 0 0 0-.021.063v67.797c0 27.765-22.588 50.353-50.353 50.353a.125.125 0 0 0 0 .247h113.369a.12.12 0 0 0 .117-.087l38.058-118.275a.12.12 0 0 0-.016-.11m15.114 118.471h23.648a.125.125 0 0 0 .122-.125V28.764a.125.125 0 0 0-.122-.125h-23.648a.125.125 0 0 0-.122.125v118.273c0 .068.054.125.122.125"
          className="fill-foreground"
        />
      </g>
    </svg>
  );
}

function EsLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 861.667 470" height="100%">
      <g fill="#ff8f1c" strokeMiterlimit="10" fontFamily="none" fontSize="none">
        <g transform="translate(-75 -240) scale(1.5 1.5)">
          <path
            d="M81.79725,281.8106l-3.29647,-0.7702c-1.69445,-0.43131 -1.97172,-1.1399 -1.97172,-1.94091c0,-0.86263 0.7702,-1.78687 2.98839,-1.78687c1.63283,0 3.08081,0.27727 3.32728,2.09495h5.29899c-0.46212,-4.49798 -4.00505,-6.53132 -8.62627,-6.53132c-4.9293,0 -8.349,2.24899 -8.349,6.0692c0,4.22071 2.98839,5.48384 6.59293,6.31566l2.74192,0.64697c2.09495,0.49293 2.89596,1.07828 2.89596,2.61869c0,1.32475 -1.32475,1.97172 -3.7894,1.97172c-2.43384,0 -3.45051,-0.95505 -3.72778,-2.80354h-5.36061c0.40051,4.80606 3.88182,7.2399 9.02677,7.2399c4.80606,0 9.21162,-1.94091 9.21162,-6.37728c0,-3.69697 -1.94091,-5.57627 -6.96263,-6.74697z"
            data-paper-data='{"glyphName":"S","glyphIndex":0,"firstGlyphOfWord":true,"word":1}'
          ></path>
          <path
            d="M107.2242,272.87625c-6.0692,0 -9.98183,3.75859 -9.98183,11.0293c0,7.27071 3.91263,11.0293 9.98183,11.0293c6.0692,0 9.95102,-3.75859 9.95102,-11.0293c0,-7.27071 -3.88182,-11.0293 -9.95102,-11.0293zM107.2242,290.37525c-3.20404,0 -4.62122,-2.21818 -4.62122,-6.4697c0,-4.28233 1.41717,-6.4697 4.62122,-6.4697c3.20404,0 4.62122,2.18738 4.62122,6.4697c0,4.25152 -1.41717,6.4697 -4.62122,6.4697z"
            data-paper-data='{"glyphName":"O","glyphIndex":1,"word":1}'
          ></path>
          <path
            d="M131.48045,290.12878v-17.00607h-5.17576v21.56567h13.64799v-4.5596z"
            data-paper-data='{"glyphName":"L","glyphIndex":2,"word":1}'
          ></path>
          <path
            d="M158.417,272.87625c-6.0692,0 -9.98183,3.75859 -9.98183,11.0293c0,7.27071 3.91263,11.0293 9.98183,11.0293c6.0692,0 9.95102,-3.75859 9.95102,-11.0293c0,-7.27071 -3.88182,-11.0293 -9.95102,-11.0293zM158.417,290.37525c-3.20404,0 -4.62122,-2.21818 -4.62122,-6.4697c0,-4.28233 1.41717,-6.4697 4.62122,-6.4697c3.20404,0 4.62122,2.18738 4.62122,6.4697c0,4.25152 -1.41717,6.4697 -4.62122,6.4697z"
            data-paper-data='{"glyphName":"O","glyphIndex":3,"lastGlyphOfWord":true,"word":1}'
          ></path>
          <path
            d="M198.02595,290.12878v-17.00607h-5.17576v21.56567h13.64799v-4.5596z"
            data-paper-data='{"glyphName":"L","glyphIndex":4,"firstGlyphOfWord":true,"word":2}'
          ></path>
          <path d="M224.96251,272.87625c-6.0692,0 -9.98183,3.75859 -9.98183,11.0293c0,7.27071 3.91263,11.0293 9.98183,11.0293c6.0692,0 9.95102,-3.75859 9.95102,-11.0293c0,-7.27071 -3.88182,-11.0293 -9.95102,-11.0293zM224.96251,290.37525c-3.20404,0 -4.62122,-2.21818 -4.62122,-6.4697c0,-4.28233 1.41717,-6.4697 4.62122,-6.4697c3.20404,0 4.62122,2.18738 4.62122,6.4697c0,4.25152 -1.41717,6.4697 -4.62122,6.4697z"></path>
          <path
            d="M254.70259,281.8106l-3.29647,-0.7702c-1.69445,-0.43131 -1.97172,-1.1399 -1.97172,-1.94091c0,-0.86263 0.7702,-1.78687 2.98839,-1.78687c1.63283,0 3.08081,0.27727 3.32728,2.09495h5.29899c-0.46212,-4.49798 -4.00505,-6.53132 -8.62627,-6.53132c-4.9293,0 -8.349,2.24899 -8.349,6.0692c0,4.22071 2.98839,5.48384 6.59293,6.31566l2.74192,0.64697c2.09495,0.49293 2.89596,1.07828 2.89596,2.61869c0,1.32475 -1.32475,1.97172 -3.7894,1.97172c-2.43384,0 -3.45051,-0.95505 -3.72778,-2.80354h-5.36061c0.40051,4.80606 3.88182,7.2399 9.02677,7.2399c4.80606,0 9.21162,-1.94091 9.21162,-6.37728c0,-3.69697 -1.94091,-5.57627 -6.96263,-6.74697z"
            data-paper-data='{"glyphName":"S","glyphIndex":6,"lastGlyphOfWord":true,"word":2}'
          ></path>
          <path
            d="M295.42064,290.37525c-3.17323,0 -4.5596,-2.21818 -4.5596,-6.4697c0,-4.28233 1.38636,-6.4697 4.5596,-6.4697c2.18738,0 3.14243,0.55455 4.03586,2.6495h4.99091c-0.55455,-4.9293 -4.68283,-7.2091 -9.1192,-7.2091c-5.94596,0 -9.82778,3.75859 -9.82778,11.0293c0,7.27071 3.88182,11.0293 9.82778,11.0293c4.46717,0 8.62627,-2.2798 9.15001,-7.27071h-4.99091c-0.86263,2.15657 -1.84849,2.71111 -4.06667,2.71111z"
            data-paper-data='{"glyphName":"C","glyphIndex":7,"firstGlyphOfWord":true,"word":3}'
          ></path>
          <path
            d="M318.5986,290.12878v-17.00607h-5.17576v21.56567h13.64799v-4.5596z"
            data-paper-data='{"glyphName":"L","glyphIndex":8,"word":3}'
          ></path>
          <path
            d="M351.23465,267.29998h-6.68536l-1.1399,3.94344h4.28233zM350.68011,294.68838h5.60707l-8.56465,-21.56567h-4.1899l-8.53384,21.56567h5.57627l1.20152,-3.54293h7.70203zM343.0705,287.38686l2.55707,-7.39394l2.55707,7.39394z"
            data-paper-data='{"glyphName":"Á","glyphIndex":9,"word":3}'
          ></path>
          <path
            d="M375.46009,281.8106l-3.29647,-0.7702c-1.69445,-0.43131 -1.97172,-1.1399 -1.97172,-1.94091c0,-0.86263 0.7702,-1.78687 2.98839,-1.78687c1.63283,0 3.08081,0.27727 3.32728,2.09495h5.29899c-0.46212,-4.49798 -4.00505,-6.53132 -8.62627,-6.53132c-4.9293,0 -8.349,2.24899 -8.349,6.0692c0,4.22071 2.98839,5.48384 6.59293,6.31566l2.74192,0.64697c2.09495,0.49293 2.89596,1.07828 2.89596,2.61869c0,1.32475 -1.32475,1.97172 -3.7894,1.97172c-2.43384,0 -3.45051,-0.95505 -3.72778,-2.80354h-5.36061c0.40051,4.80606 3.88182,7.2399 9.02677,7.2399c4.80606,0 9.21162,-1.94091 9.21162,-6.37728c0,-3.69697 -1.94091,-5.57627 -6.96263,-6.74697z"
            data-paper-data='{"glyphName":"S","glyphIndex":10,"word":3}'
          ></path>
          <path
            d="M396.85118,294.68838v-21.56567h-5.17576v21.56567z"
            data-paper-data='{"glyphName":"I","glyphIndex":11,"word":3}'
          ></path>
          <path
            d="M415.87005,290.37525c-3.17323,0 -4.5596,-2.21818 -4.5596,-6.4697c0,-4.28233 1.38636,-6.4697 4.5596,-6.4697c2.18738,0 3.14243,0.55455 4.03586,2.6495h4.99091c-0.55455,-4.9293 -4.68283,-7.2091 -9.1192,-7.2091c-5.94596,0 -9.82778,3.75859 -9.82778,11.0293c0,7.27071 3.88182,11.0293 9.82778,11.0293c4.46717,0 8.62627,-2.2798 9.15001,-7.27071h-4.99091c-0.86263,2.15657 -1.84849,2.71111 -4.06667,2.71111z"
            data-paper-data='{"glyphName":"C","glyphIndex":12,"word":3}'
          ></path>
          <path
            d="M442.7758,272.87625c-6.0692,0 -9.98183,3.75859 -9.98183,11.0293c0,7.27071 3.91263,11.0293 9.98183,11.0293c6.0692,0 9.95102,-3.75859 9.95102,-11.0293c0,-7.27071 -3.88182,-11.0293 -9.95102,-11.0293zM442.7758,290.37525c-3.20404,0 -4.62122,-2.21818 -4.62122,-6.4697c0,-4.28233 1.41717,-6.4697 4.62122,-6.4697c3.20404,0 4.62122,2.18738 4.62122,6.4697c0,4.25152 -1.41717,6.4697 -4.62122,6.4697z"
            data-paper-data='{"glyphName":"O","glyphIndex":13,"word":3}'
          ></path>
          <path
            d="M472.51588,281.8106l-3.29647,-0.7702c-1.69445,-0.43131 -1.97172,-1.1399 -1.97172,-1.94091c0,-0.86263 0.7702,-1.78687 2.98839,-1.78687c1.63283,0 3.08081,0.27727 3.32728,2.09495h5.29899c-0.46212,-4.49798 -4.00505,-6.53132 -8.62627,-6.53132c-4.9293,0 -8.349,2.24899 -8.349,6.0692c0,4.22071 2.98839,5.48384 6.59293,6.31566l2.74192,0.64697c2.09495,0.49293 2.89596,1.07828 2.89596,2.61869c0,1.32475 -1.32475,1.97172 -3.7894,1.97172c-2.43384,0 -3.45051,-0.95505 -3.72778,-2.80354h-5.36061c0.40051,4.80606 3.88182,7.2399 9.02677,7.2399c4.80606,0 9.21162,-1.94091 9.21162,-6.37728c0,-3.69697 -1.94091,-5.57627 -6.96263,-6.74697z"
            data-paper-data='{"glyphName":"S","glyphIndex":14,"lastGlyphOfWord":true,"word":3}'
          ></path>
        </g>
        <path
          d="M60.466 52.287H29.345a.125.125 0 0 0-.122.125v45.066c0 .068.054.122.122.122h31.121c4.731 0 9.247-1.433 13.059-4.148a22.7 22.7 0 0 0 9.597-18.511c0-12.493-10.164-22.656-22.656-22.656m2.435 68.716q-.04-.063-.11-.059a45 45 0 0 1-2.324.059H29.345a.125.125 0 0 0-.122.125v25.909c0 .068.054.122.122.122h49.51a.122.122 0 0 0 .106-.188zm144.701-68.467a.125.125 0 0 0 .125-.125V28.754a.125.125 0 0 0-.125-.125H106.649l-.007.002H60.466a.125.125 0 0 0 0 .247c25.396 0 46.06 20.661 46.06 46.06a45.94 45.94 0 0 1-20.692 38.439.125.125 0 0 0-.038.167l20.748 33.551.014.007a.12.12 0 0 0 .073.04c.007 0 .012.012.021.012l.021-.002h100.935a.125.125 0 0 0 .125-.125v-23.653a.125.125 0 0 0-.125-.125h-77.174V99.841h53.528a.125.125 0 0 0 .125-.125V76.068a.125.125 0 0 0-.125-.125h-53.529V52.537zm15.224.007h38.524v94.498c0 .068.056.122.125.122h23.655a.125.125 0 0 0 .122-.122v-94.5h38.528a.125.125 0 0 0 .122-.122V28.76a.125.125 0 0 0-.122-.122H222.826a.125.125 0 0 0-.125.125v23.655c0 .068.054.122.125.122m116.186 94.626h23.65a.125.125 0 0 0 .122-.125v-25.787h30.996q1.14 0 2.263-.056l16.02 25.909a.12.12 0 0 0 .106.059h27.793a.12.12 0 0 0 .108-.063.12.12 0 0 0-.002-.125l-20.685-33.452a46.18 46.18 0 0 0 20.701-38.575c0-25.533-20.774-46.307-46.307-46.307h-54.769a.125.125 0 0 0-.125.125v118.273a.125.125 0 0 0 .125.125m67.687-53.909a22.16 22.16 0 0 1-12.918 4.103h-30.996V52.539h30.996c12.359 0 22.412 10.056 22.412 22.412a22.44 22.44 0 0 1-9.492 18.309m102.286 3.304V28.762a.125.125 0 0 0-.125-.125h-53.665a.125.125 0 0 0-.122.125v67.802c0 14.861 12.091 26.952 26.95 26.952 14.868 0 26.962-12.091 26.962-26.952m124.578-67.873a.12.12 0 0 0-.101-.052h-24.832a.12.12 0 0 0-.12.087l-25.526 79.329-25.526-79.329a.12.12 0 0 0-.115-.087h-24.835l-.007.007-.016-.002a.12.12 0 0 0-.073.047h-.002l-.002.012a.2.2 0 0 0-.021.063v67.797c0 27.765-22.588 50.353-50.353 50.353a.125.125 0 0 0 0 .247h113.369a.12.12 0 0 0 .117-.087l38.058-118.275a.12.12 0 0 0-.016-.11m15.114 118.471h23.648a.125.125 0 0 0 .122-.125V28.764a.125.125 0 0 0-.122-.125h-23.648a.125.125 0 0 0-.122.125v118.273c0 .068.054.125.122.125"
          className="fill-foreground"
        ></path>
      </g>
    </svg>
  );
}

export default function Logo() {
  const locale = useLocale();
  const logoSrc = locale === 'en' ? enLogoSrc : esLogoSrc;

  return (
    <Link href="/" className="h-32 w-fit p-4">
      {locale === 'en' ? <EnLogo /> : <EsLogo />}
    </Link>
  );
}
