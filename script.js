// --- 1. 언어 번역 딕셔너리 (ko / en) ---
const i18n = {
    ko: {
        nav_home: "Home",
        nav_about: "사업개요",
        nav_solutions: "ePTO Solutions",
        nav_effects: "기대효과",

        hero_title: "자원순환형 탄소중립<br>생태계 구축",
        hero_desc: "미래 폐자원(xEV)을 활용한 알오씨오토시스템의 특장차 ePTO Retrofit",
        hero_btn: "솔루션 탐색하기",

        about_title: "사업 추진 배경",
        about_1_title: "고부가가치 창출",
        about_1_desc: "내구연한이 도래한 HEV/BEV 전동화장치를 특장차 PTO 전동화 기술로 확립하여 자원순환에 의한 최고의 부가가치를 창출합니다.",
        about_2_title: "수송분야 NDC 달성",
        about_2_desc: "운행차량 전동화 Retrofit을 통해 연료소비량을 절감하고 대기오염물질 배출을 줄여 수송분야의 국가 온실가스 감축목표(NDC)에 기여합니다.",
        about_3_title: "탄소저감 실증화",
        about_3_desc: "기후부 및 지자체 주관 탄소저감 실증사업에 참여하여, 의무반납 배터리의 안전한 재사용 및 활용 방안을 제공합니다.",

        sol_title: "특장차 ePTO Retrofit",
        sol_1_title: "레미콘 믹서",
        sol_1_desc: "HEV Traction (40kW/400Nm) 적용. 정차 작업 시간 동안 공회전 없이 믹서를 구동시켜 획기적인 연료 절감과 소음 민원을 줄입니다.",
        sol_2_title: "고소작업차 / 사다리차",
        sol_2_desc: "1ton 부터 12ton 이상의 대형 고소차까지 맞춤형 커버리지를 제공하며, 도심 및 주거지역 작업 시 무소음/무매연 환경을 실현합니다.",
        sol_3_title: "건설 / 농업기계",
        sol_3_desc: "중형 및 대형 화물 크레인(Cargo Crane), 지게차, 굴착기 등 특수 장비의 유압 펌프를 전동 모터로 완전히 대체하여 유지비용을 대폭 낮춥니다.",

        eff_title: "기대 효과",
        eff_1_title: "연료 및 배출가스 절감",
        eff_1_desc: "레미콘 믹서 기준 연간 4.7 tCO2eq 감축, 고소작업차 기준 3.5 tCO2eq 감축 효과. 장시간 저부하 운전으로 인한 구동계 손상을 원천 방지합니다.",
        eff_2_title: "투자비용 60% 절감",
        eff_2_desc: "신규 전동화 장치 적용 대비 폐배터리 및 모터 재사용으로 구매 비용을 약 60% 절감합니다. (인증 비용 포함)",
        eff_3_title: "민원 발생 최소화",
        eff_3_desc: "PTO 작동 시 발생하는 소음을 평균 5dB 이상 감소시키고, 유해 매연 및 배출가스를 완전히 차단해 친환경적인 도심 내 작업 환경을 구축합니다.",

        footer_text: "&copy; 2026 ROC AUTO SYSTEM. All rights reserved. | 자원순환형 탄소중립 생태계 구축사업",

        mute_on: "🔊 소리 끄기",
        mute_off: "🔇 소리 켜기",
        brightness_label: "💡 영상 밝기 조절"
    },
    en: {
        nav_home: "Home",
        nav_about: "Overview",
        nav_solutions: "ePTO Solutions",
        nav_effects: "Benefits",

        hero_title: "Building an Eco-friendly,<br>Carbon-neutral Ecosystem",
        hero_desc: "Specialized Vehicle ePTO Retrofit by ROC AUTO SYSTEM using Future Waste Resources (xEV)",
        hero_btn: "Explore Solutions",

        about_title: "Business Background",
        about_1_title: "Creating High Value-Added",
        about_1_desc: "We create maximum value through resource circulation by establishing PTO electrification technology for specialized vehicles using end-of-life HEV/BEV electrification devices.",
        about_2_title: "Achieving Transport NDC",
        about_2_desc: "We contribute to the Nationally Determined Contribution (NDC) for transportation by retrofitting operating vehicles to reduce fuel consumption and air pollutant emissions.",
        about_3_title: "Carbon Reduction Demonstration",
        about_3_desc: "Participating in carbon reduction demonstration projects to provide safe reuse frameworks for mandatorily returned batteries.",

        sol_title: "Specialized Vehicle ePTO Retrofit",
        sol_1_title: "Concrete Mixer",
        sol_1_desc: "Applied HEV Traction (40kW/400Nm). Dramatically reduces fuel consumption and noise complaints by driving the mixer without engine idling.",
        sol_2_title: "Aerial Lift / Ladder Truck",
        sol_2_desc: "Provides customized coverage from 1-ton to over 12-ton large lifts, realizing a noise-free, emission-free environment for urban/residential operations.",
        sol_3_title: "Construction / Agricultural Machinery",
        sol_3_desc: "Drastically lowers maintenance costs by completely replacing the hydraulic pumps of special equipment such as excavators and forklifts with electric motors.",

        eff_title: "Expected Benefits",
        eff_1_title: "Fuel & Emission Reduction",
        eff_1_desc: "Reduces 4.7 tCO2eq per year for concrete mixers, and 3.5 tCO2eq for aerial work lifts. Prevents drivetrain damage from prolonged low-load operation.",
        eff_2_title: "60% Investment Cost Savings",
        eff_2_desc: "Saves approximately 60% in purchasing costs through the reuse of waste batteries and motors compared to applying entirely new EVs.",
        eff_3_title: "Minimizing Civil Complaints",
        eff_3_desc: "Establishes an eco-friendly urban work environment by completely blocking harmful exhaust emissions and reducing PTO noise by over 5dB.",

        footer_text: "&copy; 2026 ROC AUTO SYSTEM. All rights reserved. | Resource Circular Carbon-Neutral Ecosystem Project",

        mute_on: "🔊 Mute",
        mute_off: "🔇 Unmute",
        brightness_label: "💡 Video Brightness"
    }
};

let currentLang = 'ko';

// --- 2. 언어 변경 로직 ---
const langToggle = document.getElementById('langToggle');
const heroVideo = document.getElementById('heroVideo');

if (langToggle) {
    langToggle.addEventListener('click', () => {
        // 토글 상태 변경
        if (currentLang === 'ko') {
            currentLang = 'en';
            langToggle.textContent = 'Korea';
            document.documentElement.lang = 'en';

            // 영상 영문판으로 교체
            swapVideo('hero_eng.mp4');
            const heroImage = document.getElementById('heroTextImage');
            if (heroImage) heroImage.src = 'hero_title_en.svg';
        } else {
            currentLang = 'ko';
            langToggle.textContent = 'English';
            document.documentElement.lang = 'ko';

            // 영상 한글/원본판으로 교체
            swapVideo('Hero.mp4');
            const heroImage = document.getElementById('heroTextImage');
            if (heroImage) heroImage.src = 'hero_title_ko.svg';
        }

        // 데이터 속성 기반 텍스트 모두 업데이트
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[currentLang][key]) {
                el.innerHTML = i18n[currentLang][key];
            }
        });

        // 음소거 토글 아이콘 텍스트 상태도 언어에 맞게 재정의
        const muteIcon = document.getElementById('muteIcon');
        if (muteIcon && heroVideo) {
            muteIcon.textContent = heroVideo.muted ? i18n[currentLang].mute_off : i18n[currentLang].mute_on;
        }
    });
}

function swapVideo(newSrc) {
    if (heroVideo) {
        const wasMuted = heroVideo.muted; // 기존 음소거 상태 기억
        heroVideo.src = newSrc;
        heroVideo.muted = wasMuted; // 바뀐 영상에도 같은 음소거 설정 적용
        heroVideo.load();
        heroVideo.play().catch(e => {
            console.warn("비디오 교체 후 자동재생을 실패했습니다.", e);
        });
    }
}


// --- 3. 기본 스크롤 및 UI 인터랙션 ---
// 스크롤 시 네비게이션 바 블러/배경 효과 적용
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 앵커 링크 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// 스크롤 시 나타남 효과 (Intersection Observer)
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.observer-item').forEach(item => {
    observer.observe(item);
});

// 안정적인 비디오 재생 보장 및 에러 처리
if (heroVideo) {
    heroVideo.addEventListener('error', () => {
        console.warn("히어로 비디오(" + heroVideo.src + ")를 로드할 수 없습니다. 배경색으로 대체합니다.");
        document.querySelector('.hero').style.background = "linear-gradient(45deg, #070B14, #1E293B)";
    });

    // 동영상이 시작되고 3초 후 오디오 끄기/켜기 아이콘 클릭
    heroVideo.addEventListener('playing', () => {
        setTimeout(() => {
            const btn = document.getElementById('muteBtn');
            if (btn) btn.click();
        }, 3000);
    }, { once: true });
}

// 오디오 On/Off 토글 기능 (사용자가 클릭 시 소리 재생)
const muteBtn = document.getElementById('muteBtn');
const muteIcon = document.getElementById('muteIcon');

if (muteBtn && heroVideo) {
    muteBtn.addEventListener('click', async (e) => {
        if (e) e.stopPropagation(); // document 클릭 이벤트와 겹치지 않게 방지

        if (heroVideo.muted) {
            // 현재 음소거 상태일 때 누르면 -> 소리를 켬
            heroVideo.muted = false;
            muteIcon.textContent = i18n[currentLang].mute_on; // 소리가 켜졌으므로 '소리 끄기(🔊)' 아이콘으로 변경
            muteBtn.style.borderColor = 'var(--secondary)';
            try {
                // 음소거 해제 후 재생 시도 (자동 클릭 시 브라우저 정책에 의해 차단될 수 있음)
                await heroVideo.play();
            } catch (err) {
                console.warn("오디오 재생이 차단되었습니다. 1초 후 다시 시도합니다.", err);
                // 재생이 차단되면 다시 음소거 상태로 되돌리고 비디오를 계속 재생함
                heroVideo.muted = true;
                muteIcon.textContent = i18n[currentLang].mute_off; // '소리 켜기'

                // 일시적으로 버튼 테두리가 빨간색으로 깜빡거림
                muteBtn.style.transition = 'all 0.3s ease';
                muteBtn.style.borderColor = 'rgba(255, 0, 0, 0.8)';
                muteBtn.style.transform = 'scale(1.1)';

                heroVideo.play().catch(e => console.log("재생 실패:", e));

                // 1초 후 원래 상태로 복구하고 다시 마우스 클릭 (재시도)
                setTimeout(() => {
                    muteBtn.style.transform = 'scale(1)';
                    muteBtn.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    muteBtn.click();
                }, 1000);
            }
        } else {
            // 현재 소리가 날 때 누르면 -> 소리를 끔
            heroVideo.muted = true;
            muteIcon.textContent = i18n[currentLang].mute_off; // '소리 켜기'
            muteBtn.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            heroVideo.play().catch(e => console.log("재생 실패:", e));
        }
    });

}

// --- 4. 비디오 밝기 및 텍스트 투명도 조절 스크롤바 ---
const bSlider = document.getElementById('brightnessSlider');
const hOverlay = document.querySelector('.hero-overlay');
const hContent = document.querySelector('.hero-content');

if (bSlider && hOverlay && hContent) {
    hOverlay.style.transition = 'opacity 0.1s linear';
    hContent.style.transition = 'opacity 0.1s linear';

    bSlider.addEventListener('input', (e) => {
        const val = e.target.value; // 0 ~ 100

        // CSS 자동 밝기 애니메이션 해제 후 수동 적용
        hOverlay.style.animation = 'none';
        const overlayOpacity = 1 - (val / 100);
        hOverlay.style.opacity = Math.max(0, overlayOpacity);

        // 동영상이 밝아질수록(val 증가) 글씨는 점점 투명해짐(opacity 감소)
        const textOpacity = 1 - (val / 100);

        // CSS animation(fadeInUp 등)의 forwards 속성이 inline opacity를 덮어쓰는 것을 방지
        hContent.style.animation = 'none';
        hContent.style.opacity = Math.max(0, textOpacity);
    });
}

// --- 5. 비디오 진행률 표시 및 탐색 기능 ---
const vProgress = document.getElementById('videoProgress');

if (vProgress && heroVideo) {
    // 비디오 시간에 맞춰 슬라이더 업데이트
    heroVideo.addEventListener('timeupdate', () => {
        if (!heroVideo.duration) return;
        const percent = (heroVideo.currentTime / heroVideo.duration) * 100;
        vProgress.value = percent;
    });

    // 슬라이더 조작 시 비디오 시간 변경
    vProgress.addEventListener('input', (e) => {
        if (!heroVideo.duration) return;
        const newTime = (e.target.value / 100) * heroVideo.duration;
        heroVideo.currentTime = newTime;
    });
}
