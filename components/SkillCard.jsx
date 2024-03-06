export default function SkillCard (props) {
  return (
    <div class="custom">
      <div class="card skill-card">
        <div class="card-body-skill">
          {props.skillName}
        </div>
      </div>
    </div>
  )
}