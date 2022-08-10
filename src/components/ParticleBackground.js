import ParticlesBg from "particles-bg";

export function ParticleBackground() {
  return (
    <div className="particle-background">
      <ParticlesBg type="cobweb" color="#686868" num={200} />
    </div>
  );
}
