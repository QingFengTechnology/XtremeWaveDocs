import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Final Suspect',
    description: (
      <>
        The Ultimate Among Us Mod for the Original Experience.
      </>
    ),
  },
  {
    title: 'The Other Roles Edited',
    description: (
      <>
        A mod forked from TheOtherRoles.
      </>
    ),
  },
  {
    title: 'Harry Potter AmongUs R',
    description: (
      <>
        A theme-based Among Us mod that adds items and roles related to the Harry Potter movies/books.(Harry Potter Among Us Reactivated)
      </>
    ),
  },
  {
    title: 'Town Of New Epic Xtreme',
    description: (
      <>
        Host only mod for Among Us, forked from Town Of Next.
      </>
    ),
  },
  {
    title: ' Town Of Host Edited Xi',
    description: (
      <>
        A branch derived to continue the glory of the past.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
