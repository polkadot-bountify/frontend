import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useId, useState } from 'react';

import { DiamondIcon } from '@/components/Icons/DiamondIcon';
import andrewGreeneImage from '@/images/avatars/andrew-greene.jpg';
import cathleneBurrageImage from '@/images/avatars/cathlene-burrage.jpg';
import damarisKimuraImage from '@/images/avatars/damaris-kimura.jpg';
import dianneGuilianelliImage from '@/images/avatars/dianne-guilianelli.jpg';
import erhartCockrinImage from '@/images/avatars/erhart-cockrin.jpg';
import giordanoSagucioImage from '@/images/avatars/giordano-sagucio.jpg';
import gordonSandersonImage from '@/images/avatars/gordon-sanderson.jpg';
import heatherTerryImage from '@/images/avatars/heather-terry.jpg';
import ibrahimFraschImage from '@/images/avatars/ibrahim-frasch.jpg';
import jaquelinIschImage from '@/images/avatars/jaquelin-isch.jpg';
import kimberlyParsonsImage from '@/images/avatars/kimberly-parsons.jpg';
import parkerJohnsonImage from '@/images/avatars/parker-johnson.jpg';
import piersWilkinsImage from '@/images/avatars/piers-wilkins.jpg';
import richardAstley from '@/images/avatars/richard-astley.jpg';
import rinaldoBeynonImage from '@/images/avatars/rinaldo-beynon.jpg';
import ronniCantadoreImage from '@/images/avatars/ronni-cantadore.jpg';
import stevenMchailImage from '@/images/avatars/steven-mchail.jpg';
import waylonHydenImage from '@/images/avatars/waylon-hyden.jpg';

const days = [
  {
    name: 'Top Artists',
    description: 'Over 100 Bounties',
    speakers: [
      {
        name: 'Steven McHail',
        role: 'Designer at Globex Corporation',
        image: stevenMchailImage,
      },
      {
        name: 'Jaquelin Isch',
        role: 'UX Design at InGen',
        image: jaquelinIschImage,
      },
      {
        name: 'Dianne Guilianelli',
        role: 'General Manager at Initech',
        image: dianneGuilianelliImage,
      },
      {
        name: 'Ronni Cantadore',
        role: 'Design Engineer at Weyland-Yutani',
        image: ronniCantadoreImage,
      },
      {
        name: 'Erhart Cockrin',
        role: 'Product Lead at Cyberdyne Systems',
        image: erhartCockrinImage,
      },
      {
        name: 'Parker Johnson',
        role: 'UI Designer at MomCorp',
        image: parkerJohnsonImage,
      },
    ],
  },
  {
    name: 'Rising Artists',
    description: 'Over 50 Bounties',
    speakers: [
      {
        name: 'Damaris Kimura',
        role: 'Senior Engineer at OCP',
        image: damarisKimuraImage,
      },
      {
        name: 'Ibrahim Frasch',
        role: 'Programmer at Umbrella Corp',
        image: ibrahimFraschImage,
      },
      {
        name: 'Cathlene Burrage',
        role: 'Frontend Developer at Buy n Large',
        image: cathleneBurrageImage,
      },
      {
        name: 'Rinaldo Beynon',
        role: 'Data Scientist at Rekall',
        image: rinaldoBeynonImage,
      },
      {
        name: 'Waylon Hyden',
        role: 'DevOps at RDA Corporation',
        image: waylonHydenImage,
      },
      {
        name: 'Giordano Sagucio',
        role: 'Game Developer at Soylent Corp',
        image: giordanoSagucioImage,
      },
    ],
  },
  {
    name: 'Recommended Artists',
    description: 'Curated for you',
    speakers: [
      {
        name: 'Andrew Greene',
        role: 'Frontend Developer at Ultratech',
        image: andrewGreeneImage,
      },
      {
        name: 'Heather Terry',
        role: 'Backend Developer at Xanatos Enterprises',
        image: heatherTerryImage,
      },
      {
        name: 'Piers Wilkins',
        role: 'Full stack Developer at BiffCo',
        image: piersWilkinsImage,
      },
      {
        name: 'Gordon Sanderson',
        role: 'Mobile Developer at Cobra Industries',
        image: gordonSandersonImage,
      },
      {
        name: 'Kimberly Parsons',
        role: 'Game Developer at Tyrell Corporation',
        image: kimberlyParsonsImage,
      },
      {
        name: 'Richard Astley',
        role: 'CEO at Roll Out',
        image: richardAstley,
      },
    ],
  },
];

function ImageClipPaths({
  id,
  ...props
}: { id: string } & JSX.IntrinsicElements['svg']) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ArtistList() {
  let id = useId();
  let [tabOrientation, setTabOrientation] = useState('horizontal');

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)');

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal');
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener('change', onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);

  return (
    <section id="artists" aria-labelledby="artists-title">
      <ImageClipPaths id={id} />
      <div className="mx-6 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 self-start sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.description}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className="rounded-4xl group relative h-[17.5rem] transform overflow-hidden">
                      <div
                        className={clsx(
                          'rounded-4xl absolute top-0 left-0 right-4 bottom-6 border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-blue-300',
                            'border-indigo-300',
                            'border-sky-300',
                          ][speakerIndex % 3]
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={speaker.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="font-display mt-8 text-xl font-bold tracking-tight text-slate-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) => (
                <>
                  {days.map((day, currIndex) => (
                    <div key={day.description} className="relative lg:pl-8">
                      <DiamondIcon
                        className={clsx(
                          'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                          currIndex === selectedIndex
                            ? 'fill-blue-600 stroke-blue-600'
                            : 'fill-transparent stroke-slate-400'
                        )}
                      />
                      <div className="relative">
                        <div
                          className={clsx(
                            'font-mono text-sm',
                            currIndex === selectedIndex
                              ? 'text-blue-600'
                              : 'text-slate-500'
                          )}
                        >
                          <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                            <span className="absolute inset-0" />
                            {day.name}
                          </Tab>
                        </div>
                        <div className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900">
                          {day.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Tab.List>
          </div>
        </Tab.Group>
      </div>
    </section>
  );
}