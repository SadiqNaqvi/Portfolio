export type Skill = { label: string, logo: string }

const SkillTile = ({ label, logo }: Skill) => (
    <article className="rounded-md bg-zinc-500/10 border p-2 border-zinc-500/10 gap-2 flex items-center">
        <img src={logo} alt={`Logo of ${label}`} className="rounded-md size-8 object-contain" />
        <h4 className="text-lg capitalize">{label}</h4>
    </article>
)

export default SkillTile;