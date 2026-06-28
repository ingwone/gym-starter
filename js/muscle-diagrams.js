// 근육 자극 부위 SVG 다이어그램 생성기
// 최종 인체 모형 기반 — 앞면/뒷면

const BODY_COLOR = 'var(--color-text-tertiary, #6B6A66)';
const PRIMARY = '#F09595';
const PRIMARY_STROKE = '#E24B4A';
const SECONDARY = '#FAC775';
const SECONDARY_STROKE = '#EF9F27';

// 공용 몸통 path (앞면용 라인 포함)
function bodyPaths(side) {
  const lines = side === 'front'
    ? `<line x1="0" y1="52" x2="0" y2="157" stroke="white" stroke-width="0.8" stroke-opacity="0.25"/>
       <path d="M-22,57 C-22,75 -20,103 -16,126" fill="none" stroke="white" stroke-width="0.5" stroke-opacity="0"/>
       `
    : `<line x1="0" y1="52" x2="0" y2="157" stroke="white" stroke-width="0.8" stroke-opacity="0.25"/>
       <path d="M-22,57 C-24,77 -22,107 -18,130" fill="none" stroke="white" stroke-width="0.7" stroke-opacity="0.2"/>
       <path d="M22,57 C24,77 22,107 18,130" fill="none" stroke="white" stroke-width="0.7" stroke-opacity="0.2"/>
       <path d="M-18,142 C-24,148 -26,158 -22,166 Q0,172 22,166 C26,158 24,148 18,142" fill="none" stroke="white" stroke-width="0.8" stroke-opacity="0.2"/>
       <line x1="0" y1="142" x2="0" y2="170" stroke="white" stroke-width="0.7" stroke-opacity="0.2"/>`;

  return `
    <ellipse cx="0" cy="20" rx="21" ry="23" fill="${BODY_COLOR}"/>
    <rect x="-9" y="40" width="18" height="12" rx="3" fill="${BODY_COLOR}"/>
    <path d="M-34,52 C-44,56 -52,67 -50,79 C-48,89 -38,96 -28,100 L-26,143 C-24,153 -16,158 -8,160 L8,160 C16,158 24,153 26,143 L28,100 C38,96 48,89 50,79 C52,67 44,56 34,52 C22,48 11,46 0,46 C-11,46 -22,48 -34,52Z" fill="${BODY_COLOR}"/>
    <path d="M-50,54 C-57,57 -63,63 -65,72 L-67,104 C-65,113 -58,117 -52,117 L-45,117 C-38,117 -34,113 -34,104 L-34,72 C-36,63 -43,57 -50,54Z" fill="${BODY_COLOR}"/>
    <path d="M-65,117 C-67,126 -67,139 -65,150 L-62,168 C-60,175 -56,177 -52,177 C-48,177 -44,175 -42,168 L-39,150 C-37,139 -38,126 -40,117Z" fill="${BODY_COLOR}"/>
    <ellipse cx="-52" cy="182" rx="7" ry="9" fill="${BODY_COLOR}"/>
    <path d="M50,54 C57,57 63,63 65,72 L67,104 C65,113 58,117 52,117 L45,117 C38,117 34,113 34,104 L34,72 C36,63 43,57 50,54Z" fill="${BODY_COLOR}"/>
    <path d="M65,117 C67,126 67,139 65,150 L62,168 C60,175 56,177 52,177 C48,177 44,175 42,168 L39,150 C37,139 38,126 40,117Z" fill="${BODY_COLOR}"/>
    <ellipse cx="52" cy="182" rx="7" ry="9" fill="${BODY_COLOR}"/>
    <path d="M-28,157 C-36,160 -42,165 -42,174 L-42,183 C-42,189 -34,193 -22,194 L22,194 C34,193 42,189 42,183 L42,174 C42,165 36,160 28,157Z" fill="${BODY_COLOR}"/>
    <path d="M-40,191 C-44,196 -46,205 -44,218 L-40,258 C-38,267 -31,271 -24,271 C-17,271 -10,267 -8,258 L-4,218 C-2,205 -4,196 -10,191Z" fill="${BODY_COLOR}"/>
    <path d="M-42,271 C-46,281 -46,296 -44,309 L-40,330 C-38,337 -31,339 -26,337 C-21,335 -19,328 -19,321 L-15,300 C-13,287 -15,274 -20,271Z" fill="${BODY_COLOR}"/>
    <path d="M-40,332 C-43,337 -47,344 -54,348 C-57,352 -54,356 -47,356 L-20,356 C-14,356 -12,351 -15,347 C-18,343 -23,337 -28,333Z" fill="${BODY_COLOR}"/>
    <path d="M40,191 C44,196 46,205 44,218 L40,258 C38,267 31,271 24,271 C17,271 10,267 8,258 L4,218 C2,205 4,196 10,191Z" fill="${BODY_COLOR}"/>
    <path d="M42,271 C46,281 46,296 44,309 L40,330 C38,337 31,339 26,337 C21,335 19,328 19,321 L15,300 C13,287 15,274 20,271Z" fill="${BODY_COLOR}"/>
    <path d="M40,332 C43,337 47,344 54,348 C57,352 54,356 47,356 L20,356 C14,356 12,351 15,347 C18,343 23,337 28,333Z" fill="${BODY_COLOR}"/>
    ${lines}
  `;
}

// 근육 하이라이트 요소들
const MUSCLES = {
  // 앞면
  chest: (p='primary') => {
    const c = p==='primary' ? PRIMARY : SECONDARY;
    const s = p==='primary' ? PRIMARY_STROKE : SECONDARY_STROKE;
    const op = p==='primary' ? 0.9 : 0.75;
    return `<path d="M-30,58 C-40,62 -47,72 -45,83 C-43,92 -34,98 -20,101 L0,103 L20,101 C34,98 43,92 45,83 C47,72 40,62 30,58 C19,54 10,52 0,52 C-10,52 -19,54 -30,58Z" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>
    <line x1="0" y1="52" x2="0" y2="102" stroke="white" stroke-width="1" stroke-dasharray="3,3" stroke-opacity="0.6"/>`;
  },
  deltF: (p='primary', op=0.85) => {
    const c = p==='primary' ? PRIMARY : SECONDARY;
    const s = p==='primary' ? PRIMARY_STROKE : SECONDARY_STROKE;
    return `<ellipse cx="-50" cy="68" rx="12" ry="16" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>
    <ellipse cx="50" cy="68" rx="12" ry="16" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>`;
  },
  bicep: (p='primary', op=0.85) => {
    const c = p==='primary' ? PRIMARY : SECONDARY;
    const s = p==='primary' ? PRIMARY_STROKE : SECONDARY_STROKE;
    return `<ellipse cx="-51" cy="90" rx="10" ry="17" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>
    <ellipse cx="51" cy="90" rx="10" ry="17" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>`;
  },
  forearm: (p='primary', op=0.85) => {
    const c = p==='primary' ? PRIMARY : SECONDARY;
    const s = p==='primary' ? PRIMARY_STROKE : SECONDARY_STROKE;
    return `<ellipse cx="-52" cy="143" rx="10" ry="17" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>
    <ellipse cx="52" cy="143" rx="10" ry="17" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>`;
  },
  abs: (p='primary', op=0.85) => {
    const c = p==='primary' ? PRIMARY : SECONDARY;
    const s = p==='primary' ? PRIMARY_STROKE : SECONDARY_STROKE;
    return `<rect x="-16" y="103" width="32" height="50" rx="6" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>
    <line x1="0" y1="103" x2="0" y2="153" stroke="white" stroke-width="0.8" stroke-opacity="0.5"/>
    <line x1="-16" y1="120" x2="16" y2="120" stroke="white" stroke-width="0.7" stroke-opacity="0.5"/>
    <line x1="-16" y1="136" x2="16" y2="136" stroke="white" stroke-width="0.7" stroke-opacity="0.5"/>`;
  },
  quad: (p='primary', op=0.8) => {
    const c = p==='primary' ? PRIMARY : SECONDARY;
    const s = p==='primary' ? PRIMARY_STROKE : SECONDARY_STROKE;
    return `<ellipse cx="-25" cy="228" rx="14" ry="36" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>
    <ellipse cx="25" cy="228" rx="14" ry="36" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>`;
  },
  calf: (p='primary', op=0.8) => {
    const c = p==='primary' ? PRIMARY : SECONDARY;
    const s = p==='primary' ? PRIMARY_STROKE : SECONDARY_STROKE;
    return `<ellipse cx="-25" cy="300" rx="11" ry="26" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>
    <ellipse cx="25" cy="300" rx="11" ry="26" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>`;
  },
  // 뒷면
  deltR: (p='primary', op=0.85) => {
    const c = p==='primary' ? PRIMARY : SECONDARY;
    const s = p==='primary' ? PRIMARY_STROKE : SECONDARY_STROKE;
    return `<ellipse cx="-50" cy="68" rx="12" ry="16" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>
    <ellipse cx="50" cy="68" rx="12" ry="16" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>`;
  },
  tricep: (p='primary', op=0.85) => {
    const c = p==='primary' ? PRIMARY : SECONDARY;
    const s = p==='primary' ? PRIMARY_STROKE : SECONDARY_STROKE;
    return `<ellipse cx="-51" cy="90" rx="10" ry="17" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>
    <ellipse cx="51" cy="90" rx="10" ry="17" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>`;
  },
  lat: (p='primary', op=0.85) => {
    const c = p==='primary' ? PRIMARY : SECONDARY;
    const s = p==='primary' ? PRIMARY_STROKE : SECONDARY_STROKE;
    return `<path d="M-28,60 C-38,66 -46,80 -44,100 L-38,130 C-30,136 -20,140 -12,140 L-8,108 C-10,86 -16,68 -28,60Z" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>
    <path d="M28,60 C38,66 46,80 44,100 L38,130 C30,136 20,140 12,140 L8,108 C10,86 16,68 28,60Z" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>`;
  },
  trap: (p='primary', op=0.8) => {
    const c = p==='primary' ? PRIMARY : SECONDARY;
    const s = p==='primary' ? PRIMARY_STROKE : SECONDARY_STROKE;
    return `<path d="M-20,52 C-28,56 -34,62 -30,70 C-22,66 -10,64 0,64 C10,64 22,66 30,70 C34,62 28,56 20,52 C12,49 6,48 0,48 C-6,48 -12,49 -20,52Z" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="0.8"/>`;
  },
  glute: (p='primary', op=0.85) => {
    const c = p==='primary' ? PRIMARY : SECONDARY;
    const s = p==='primary' ? PRIMARY_STROKE : SECONDARY_STROKE;
    return `<ellipse cx="-16" cy="174" rx="18" ry="16" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>
    <ellipse cx="16" cy="174" rx="18" ry="16" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>`;
  },
  hamstring: (p='primary', op=0.8) => {
    const c = p==='primary' ? PRIMARY : SECONDARY;
    const s = p==='primary' ? PRIMARY_STROKE : SECONDARY_STROKE;
    return `<ellipse cx="-25" cy="228" rx="14" ry="36" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>
    <ellipse cx="25" cy="228" rx="14" ry="36" fill="${c}" fill-opacity="${op}" stroke="${s}" stroke-width="1"/>`;
  },
};

// 운동별 다이어그램 데이터
const DIAGRAMS = {
  // 가슴
  chest_bench:   { front: () => MUSCLES.chest() + MUSCLES.deltF('secondary') + MUSCLES.bicep('secondary',0.5),  back: () => MUSCLES.deltR('secondary',0.35) + MUSCLES.tricep('secondary') },
  chest_fly:     { front: () => MUSCLES.chest() + MUSCLES.deltF('secondary',0.7), back: () => '' },
  chest_pushup:  { front: () => MUSCLES.chest() + MUSCLES.deltF('primary') + MUSCLES.bicep('primary',0.7), back: () => MUSCLES.tricep('primary') },
  chest_cable:   { front: () => MUSCLES.chest() + MUSCLES.deltF('secondary',0.7), back: () => '' },
  // 등
  back_lat:      { front: () => MUSCLES.bicep('secondary'), back: () => MUSCLES.lat() + MUSCLES.trap('secondary') },
  back_row:      { front: () => MUSCLES.bicep('secondary'), back: () => MUSCLES.lat() + MUSCLES.trap('primary',0.7) + MUSCLES.deltR('secondary',0.5) },
  back_onearm:   { front: () => MUSCLES.bicep('secondary'), back: () => MUSCLES.lat() + MUSCLES.deltR('secondary',0.5) },
  // 어깨
  sh_press:      { front: () => MUSCLES.deltF('primary') + MUSCLES.bicep('secondary',0.4), back: () => MUSCLES.tricep('secondary',0.6) + MUSCLES.trap('secondary',0.5) },
  sh_lateral:    { front: () => MUSCLES.deltF('primary',0.9), back: () => MUSCLES.deltR('primary',0.6) },
  sh_facepull:   { front: () => MUSCLES.bicep('secondary',0.5), back: () => MUSCLES.deltR('primary') + MUSCLES.trap('secondary') },
  // 삼두
  tri_pushdown:  { front: () => MUSCLES.bicep('primary',0.3), back: () => MUSCLES.tricep('primary') },
  tri_dip:       { front: () => MUSCLES.chest('secondary') + MUSCLES.deltF('secondary',0.5), back: () => MUSCLES.tricep('primary') },
  tri_skull:     { front: () => '', back: () => MUSCLES.tricep('primary') },
  tri_overhead:  { front: () => '', back: () => MUSCLES.tricep('primary') },
  tri_kickback:  { front: () => '', back: () => MUSCLES.tricep('primary') },
  // 이두
  bi_barbell:    { front: () => MUSCLES.bicep('primary') + MUSCLES.forearm('secondary',0.5), back: () => '' },
  bi_hammer:     { front: () => MUSCLES.bicep('primary',0.8) + MUSCLES.forearm('primary',0.9), back: () => '' },
  bi_incline:    { front: () => MUSCLES.bicep('primary') + MUSCLES.forearm('secondary',0.4), back: () => '' },
  // 하체
  leg_squat:     { front: () => MUSCLES.quad('primary') + MUSCLES.calf('secondary',0.5), back: () => MUSCLES.glute('primary') + MUSCLES.hamstring('secondary',0.5) },
  leg_press:     { front: () => MUSCLES.quad('primary') + MUSCLES.calf('secondary',0.4), back: () => MUSCLES.glute('secondary') + MUSCLES.hamstring('secondary',0.5) },
  leg_lunge:     { front: () => MUSCLES.quad('primary'), back: () => MUSCLES.glute('primary') + MUSCLES.hamstring('secondary',0.6) },
  leg_rdl:       { front: () => '', back: () => MUSCLES.hamstring('primary') + MUSCLES.glute('primary',0.75) },
  // 복근
  core_plank:    { front: () => MUSCLES.abs('primary') + MUSCLES.quad('secondary',0.35), back: () => MUSCLES.glute('secondary',0.4) },
  core_crunch:   { front: () => MUSCLES.abs('primary'), back: () => '' },
};

// SVG 생성
function makeDiagramSVG(key) {
  const d = DIAGRAMS[key];
  if (!d) return '';
  const W = 300, H = 460;
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
    <rect width="${W}" height="${H}" fill="transparent"/>
    <!-- 앞면 -->
    <text x="75" y="16" text-anchor="middle" font-size="11" fill="#888" font-family="sans-serif">앞면</text>
    <g transform="translate(75,22)">${bodyPaths('front')}${d.front()}</g>
    <!-- 뒷면 -->
    <text x="225" y="16" text-anchor="middle" font-size="11" fill="#888" font-family="sans-serif">뒷면</text>
    <g transform="translate(225,22)">${bodyPaths('back')}${d.back()}</g>
    <!-- 범례 -->
    <rect x="20" y="430" width="9" height="9" rx="2" fill="${PRIMARY}" stroke="${PRIMARY_STROKE}" stroke-width="0.8"/>
    <text x="33" y="438" font-size="9" fill="#888" font-family="sans-serif">주동근</text>
    <rect x="90" y="430" width="9" height="9" rx="2" fill="${SECONDARY}" stroke="${SECONDARY_STROKE}" stroke-width="0.8"/>
    <text x="103" y="438" font-size="9" fill="#888" font-family="sans-serif">협력근</text>
  </svg>`;
}

// 운동 키 매핑 (exercises.html의 EXERCISES 객체 key → diagram key)
const DIAGRAM_MAP = {
  chest: ['chest_bench','chest_fly','chest_pushup','chest_cable'],
  back:  ['back_lat','back_row','back_onearm'],
  shoulder: ['sh_press','sh_lateral','sh_facepull'],
  triceps: ['tri_pushdown','tri_dip','tri_skull','tri_overhead','tri_kickback'],
  biceps: ['bi_barbell','bi_hammer','bi_incline'],
  leg: ['leg_squat','leg_press','leg_lunge','leg_rdl'],
  core: ['core_plank','core_crunch'],
};

// 카드 렌더링 시 호출
window.getMuscleDiagram = makeDiagramSVG;
window.DIAGRAM_MAP = DIAGRAM_MAP;
