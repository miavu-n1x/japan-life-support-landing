type IllustrationProps = {
  className?: string;
};

export function BrandLogo({ className = "" }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 56 56"
      fill="none"
      role="img"
      aria-label="japan life support logo"
    >
      <rect width="56" height="56" rx="18" fill="#FFFDF8" />
      <path
        d="M15 32.5c0-7.2 5.8-13 13-13s13 5.8 13 13"
        stroke="#B9DCF5"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M18 32.5 28 24l10 8.5V42H18v-9.5Z"
        fill="#CDEEE1"
        stroke="#08223A"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M28 24c-1.6-5.3 1.5-9.4 6.4-10.5.8 4.7-1 8.7-6.4 10.5Z"
        fill="#F7C8BD"
      />
      <path
        d="M28 24c-4.6-2.7-5.5-7.1-3.2-11.2 3.8 2.2 5.5 6 3.2 11.2Z"
        fill="#D9D2F3"
      />
      <circle cx="28" cy="35" r="2.5" fill="#08223A" />
    </svg>
  );
}

export function HeroJapanLife({ className = "" }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 720 560" fill="none" role="img">
      <rect width="720" height="560" rx="44" fill="#FFFDF8" />
      <circle cx="575" cy="103" r="58" fill="#F7C8BD" opacity=".75" />
      <path d="M0 396c118-62 196-58 316-17 128 44 244 38 404-28v209H0V396Z" fill="#E9F7FF" />
      <path d="M82 276h154v182H82V276Z" fill="#FFFFFF" stroke="#D9EAF5" strokeWidth="4" />
      <path d="M106 302h38v38h-38zM174 302h38v38h-38zM106 363h38v38h-38zM174 363h38v38h-38z" fill="#B9DCF5" opacity=".7" />
      <path d="M308 216h198v242H308V216Z" fill="#FFFFFF" stroke="#D9EAF5" strokeWidth="4" />
      <path d="M334 250h45v52h-45zM407 250h45v52h-45zM334 335h45v52h-45zM407 335h45v52h-45z" fill="#CDEEE1" opacity=".9" />
      <path d="M298 216 407 132l109 84H298Z" fill="#D9D2F3" stroke="#08223A" strokeWidth="4" strokeLinejoin="round" />
      <path d="M481 165h69v293h-69V165Z" fill="#F8F0E1" stroke="#D9EAF5" strokeWidth="4" />
      <path d="M513 121v337" stroke="#08223A" strokeWidth="5" strokeLinecap="round" opacity=".75" />
      <path d="M457 138c36-26 76-28 112 0M467 180c30-18 62-18 92 0" stroke="#F7C8BD" strokeWidth="9" strokeLinecap="round" />
      <path d="M123 451c65-40 131-40 196 0M420 451c54-34 109-34 164 0" stroke="#08223A" strokeWidth="5" strokeLinecap="round" opacity=".5" />
      <path d="M158 437h409" stroke="#CDEEE1" strokeWidth="12" strokeLinecap="round" />
      <circle cx="203" cy="421" r="23" fill="#08223A" />
      <circle cx="522" cy="421" r="23" fill="#08223A" />
      <path d="M208 418h286c18 0 35-8 46-22l29-37H178l30 59Z" fill="#B9DCF5" stroke="#08223A" strokeWidth="4" strokeLinejoin="round" />
      <path d="M259 358h185l24 40H238l21-40Z" fill="#FFFFFF" opacity=".9" />
    </svg>
  );
}

export function MaiPortrait({ className = "" }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 520 620" fill="none" role="img">
      <rect width="520" height="620" rx="42" fill="#FFFDF8" />
      <path d="M73 458c86-74 216-84 376-25v187H73V458Z" fill="#E9F7FF" />
      <rect x="92" y="78" width="336" height="420" rx="40" fill="#FFFFFF" stroke="#D9EAF5" strokeWidth="5" />
      <path d="M155 168h210M155 213h154M155 258h196" stroke="#CDEEE1" strokeWidth="14" strokeLinecap="round" />
      <path d="M188 381c16-76 126-76 142 0l19 92H169l19-92Z" fill="#B9DCF5" />
      <circle cx="259" cy="290" r="62" fill="#F7C8BD" />
      <path d="M195 285c7-72 57-96 114-72 31 13 49 39 45 75-42-11-74-31-98-61-11 28-31 47-61 58Z" fill="#08223A" opacity=".82" />
      <path d="M221 306c24 18 52 18 76 0" stroke="#08223A" strokeWidth="5" strokeLinecap="round" opacity=".55" />
      <path d="M132 475h260" stroke="#D9D2F3" strokeWidth="15" strokeLinecap="round" />
      <path d="M180 518h164" stroke="#CDEEE1" strokeWidth="15" strokeLinecap="round" />
    </svg>
  );
}

export function TopicIllustration({ type }: { type: string }) {
  const bg = type === "basket" ? "#F8F0E1" : type === "wallet" ? "#E9F7FF" : "#FFFDF8";
  return (
    <svg viewBox="0 0 96 96" fill="none" className="h-16 w-16" aria-hidden="true">
      <rect width="96" height="96" rx="28" fill={bg} />
      {type === "basket" ? (
        <>
          <path d="M27 42h42l-6 28H33l-6-28Z" fill="#CDEEE1" stroke="#08223A" strokeWidth="3" />
          <path d="M36 42c2-11 22-11 24 0" stroke="#08223A" strokeWidth="3" strokeLinecap="round" />
          <circle cx="40" cy="57" r="4" fill="#F7C8BD" />
          <circle cx="55" cy="57" r="4" fill="#B9DCF5" />
        </>
      ) : type === "wallet" ? (
        <>
          <rect x="24" y="32" width="48" height="34" rx="9" fill="#CDEEE1" stroke="#08223A" strokeWidth="3" />
          <path d="M57 43h18v13H57a6.5 6.5 0 0 1 0-13Z" fill="#D9D2F3" stroke="#08223A" strokeWidth="3" />
          <circle cx="60" cy="49.5" r="2.5" fill="#08223A" />
        </>
      ) : type === "city" ? (
        <>
          <path d="M24 68V34h19v34M53 68V25h19v43" fill="#B9DCF5" />
          <path d="M24 68V34h19v34M53 68V25h19v43" stroke="#08223A" strokeWidth="3" strokeLinejoin="round" />
          <path d="M30 43h7M30 53h7M59 36h7M59 47h7M59 58h7" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        </>
      ) : type === "receipt" ? (
        <>
          <path d="M29 24h38v48l-6-4-6 4-6-4-6 4-6-4-8 4V24Z" fill="#FFFFFF" stroke="#08223A" strokeWidth="3" />
          <path d="M38 39h20M38 50h16M38 61h20" stroke="#B9DCF5" strokeWidth="5" strokeLinecap="round" />
        </>
      ) : (
        <>
          <rect x="28" y="22" width="40" height="52" rx="6" fill="#FFFFFF" stroke="#08223A" strokeWidth="3" />
          <path d="M37 38h22M37 49h22M37 60h14" stroke="#CDEEE1" strokeWidth="5" strokeLinecap="round" />
          <path d="M60 22v16h8" fill="#D9D2F3" />
        </>
      )}
    </svg>
  );
}

export function BlogThumbnail({ type }: { type: string }) {
  return (
    <svg viewBox="0 0 640 360" className="h-full w-full" role="img">
      <rect width="640" height="360" rx="28" fill="#FFFDF8" />
      {type === "train" ? (
        <>
          <rect x="78" y="84" width="484" height="178" rx="34" fill="#B9DCF5" stroke="#08223A" strokeWidth="6" />
          <rect x="120" y="122" width="112" height="70" rx="12" fill="#FFFFFF" />
          <rect x="264" y="122" width="112" height="70" rx="12" fill="#FFFFFF" />
          <rect x="408" y="122" width="88" height="70" rx="12" fill="#FFFFFF" />
          <path d="M90 280h460M149 280l-46 42M491 280l46 42" stroke="#08223A" strokeWidth="7" strokeLinecap="round" />
          <circle cx="182" cy="241" r="17" fill="#08223A" />
          <circle cx="458" cy="241" r="17" fill="#08223A" />
        </>
      ) : type === "market" ? (
        <>
          <path d="M142 132h356l-26 152H168l-26-152Z" fill="#CDEEE1" stroke="#08223A" strokeWidth="6" />
          <path d="M205 132c12-74 218-74 230 0" stroke="#08223A" strokeWidth="7" strokeLinecap="round" />
          <circle cx="240" cy="202" r="28" fill="#F7C8BD" />
          <circle cx="323" cy="202" r="28" fill="#B9DCF5" />
          <circle cx="404" cy="202" r="28" fill="#D9D2F3" />
          <path d="M206 299h228" stroke="#08223A" strokeWidth="7" strokeLinecap="round" opacity=".45" />
        </>
      ) : type === "life" ? (
        <>
          <rect x="122" y="78" width="396" height="220" rx="34" fill="#E9F7FF" stroke="#D9EAF5" strokeWidth="6" />
          <path d="M185 238V151l70-55 70 55v87H185Z" fill="#CDEEE1" stroke="#08223A" strokeWidth="6" strokeLinejoin="round" />
          <rect x="279" y="178" width="34" height="60" rx="8" fill="#FFFFFF" />
          <path d="M361 135h83M361 171h60M361 207h92" stroke="#D9D2F3" strokeWidth="14" strokeLinecap="round" />
        </>
      ) : (
        <>
          <rect x="174" y="58" width="292" height="244" rx="24" fill="#FFFFFF" stroke="#08223A" strokeWidth="6" />
          <path d="M224 122h192M224 166h168M224 210h192M224 254h110" stroke="#B9DCF5" strokeWidth="14" strokeLinecap="round" />
          <path d="M450 230c49 28 74 55 72 93-45-3-78-26-94-69l22-24Z" fill="#F7C8BD" stroke="#08223A" strokeWidth="5" />
        </>
      )}
    </svg>
  );
}

export function ChatSupportIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 560 420" fill="none" role="img">
      <rect width="560" height="420" rx="36" fill="#FFFDF8" />
      <rect x="66" y="70" width="300" height="118" rx="28" fill="#FFFFFF" stroke="#D9EAF5" strokeWidth="5" />
      <path d="M111 113h197M111 148h132" stroke="#B9DCF5" strokeWidth="13" strokeLinecap="round" />
      <rect x="194" y="226" width="300" height="118" rx="28" fill="#CDEEE1" stroke="#08223A" strokeWidth="5" />
      <path d="M239 269h196M239 304h118" stroke="#FFFFFF" strokeWidth="13" strokeLinecap="round" />
      <path d="M401 92h60v60h-60z" fill="#D9D2F3" />
      <path d="m431 76 55 48-55 48-55-48 55-48Z" fill="#F7C8BD" opacity=".9" />
      <path d="M91 306h61M121 276v61" stroke="#B9DCF5" strokeWidth="12" strokeLinecap="round" />
    </svg>
  );
}
