import React from "react";
import "./rozaniec.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const Rozaniec = () => {
  return (
    <motion.div
      className="wspolnoty-single sakramenty-chrzest sakramenty-single"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="sakramenty-chrzest-tekst">
        <div className="title">
          <h2>Kółka Różańcowe</h2>
          <div className="title-separator"></div>
        </div>
        <div className="wspolnoty-quote-box">
          <p>
            W naszej parafii istnieje 12 Kółek Różańcowych. Opiekę
            duchową nad tą liczną grupą sprawuje ks. Wacław Wojtunik.
          </p>
          <br />
          <p>
            Od połowy XIX wieku najbardziej popularną różańcową
            wspólnotę modlitewną stanowi Stowarzyszenie Żywego
            Różańca, założone przez Paulinę Jaricot (1799-1862) w
            Lyonie w roku 1826. "Najważniejszą... rzeczą i
            najtrudniejszą jest uczynić różaniec modlitwą wszystkich"
            - napisała wtedy. Każdy człowiek może znaleźć w ciągu dnia
            kilka minut, aby odmówić dziesiątek różańca, czyli jedną
            tajemnicę. Paulina Jaricot zaczęła organizować
            piętnastoosobowe grupy, nazwane później „żywymi różami”.
            Każda z osób tworzących piętnastkę zobowiązywała się do
            odmawiania jednej tajemnicy, czyli wszyscy razem odmawiają
            codziennie cały różaniec. Wszystkich członków róży dotyczy
            taka sama zasługa jakby odmówili cały różaniec.
            Nieodmówienie tajemnicy nie oznacza grzechu, a utratę
            zasługi. Celem Stowarzyszenia Żywego Różańca jest według
            Założycielki wspieranie modlitwą, ofiarą duchową i
            materialną działań misyjnych Kościoła. Dziełu Pauliny
            Jaricot udzieliło poparcia wielu biskupów oraz ojciec
            generał Zakonu Kaznodziejskiego, który przyłączył
            Stowarzyszenie Żywego Różańca do wielkiej historycznej
            dominikańskiej Rodziny Różańcowej, obejmującej Bractwa
            Różańcowe i Różaniec Wieczysty. Wkrótce papież Grzegorz
            XVI wydał 'breve' aprobujące stowarzyszenie. Żywy Różaniec
            w krótkim czasie rozprzestrzenił się w całej Francji, a
            następnie na świecie
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Rozaniec;
