import cx from 'classnames';

interface HeroProps {
  roles: string[],
  skills: string[],
  duration: string,
  title: string,
  caption: string,
  summary: string,
  problem: string,
}

const CONTAINER = 'flex flex-col gap-y-2 md:gap-y-5'

const Hero = ({ roles, skills, duration, title, caption, summary, problem }: HeroProps) => {
  return (
    <section className="flex flex-col items-center justify-center gap-y">
      <div className="bg-[#E3EAD4] py-20 flex flex-col items-center justify-center leading-snug text-center w-full">
        <h1 className="font-italiana text-[80px] md:text-[250px] text-[#829B69]">{title}</h1>
        <h2 className="text-[20px] md:text-[40px] text-[#6A8663]">{caption}</h2>
      </div>
      <p className='copy-body padding'>
        {summary}
      </p>
      <div className={cx('grid grid-cols-2 w-full justify-between gap-x-5', 'padding')}>
        <div className={cx(CONTAINER)}>
          <h2 className="copy-h2">Role</h2>
          <div>
            {roles.map((role, i) => {
              return (
                <p className="copy-p" key={`${role}-${i}`}>{role}</p>
              )
            })}
          </div>
        </div>
        <div className={cx('col-start-2 row-span-0 row-span-2', CONTAINER)}>
          <h2 className="copy-h2">Skills</h2>
          <div>
            {skills.map((skill, i) => {
              return (
                <p className="copy-p" key={`${skill}-${i}`}>{skill}</p>
              )
            })}
          </div>
        </div>
        <div className={cx('col-start-1 self-end', CONTAINER)}>
          <h2 className="copy-h2">Duration</h2>
          <div>
            <p className="copy-p">{duration}</p>
          </div>
        </div>
      </div>
      <p className='copy-body padding'>
        {problem}
      </p>
    </section>
  )
}

export default Hero;