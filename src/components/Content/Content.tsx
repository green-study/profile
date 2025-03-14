import { ReactElement } from "react";
import ProjectList from "./ProjectList";
import Profile from "./Profile";
import "./Content.css"

const projects = [
    {
        imageUrl: 'profile_project.png',
        projectName: '웹 포트폴리오',
        date: '2025년 2월 ~ 2025년 3월',
        languages: ['React', 'TypeScript', 'CSS'],
        link1: 'https://github.com/green-study/profile',
        link2: 'https://green-study.github.io/profile/',
        contribution: ['Front-end 개발자의 포트폴리오용 웹 제작','TypeScript와 React 기반 Front-end UI 개발', 'Github Workflow를 통한 웹 배포'],
        hideLink1: false,
        buttonText1: '소스코드',
        hideLink2: false,
        buttonText2: '웹사이트'
    },
    {
        imageUrl: 'blockly_project.png',
        projectName: 'Robolink Blockly',
        date: '2024년 5월 ~ ing',
        languages: ['React', 'JavaScript', 'CSS'],
        link1: 'https://codrone.robolink.com/edu/blockly/',
        link2: '',
        contribution: ['Google Blockly 기반의 코딩 학습 웹 Front-end UI/UX 개발','기존 프로젝트의 Bug 수정 및 새로운 Feature 구현으로 지속적인 Release 관리 담당','Blockly 사이트와 Python, Docs 사이트 간 데이터 전송 기능을 개발','각 요소를 컴포넌트 단위로 분리하여 유지보수성과 관리 효율성 향상'],
        hideLink1: false,
        buttonText1: '웹사이트',
        hideLink2: true,
        buttonText2: ''
    },
    {
        imageUrl: 'docs_project.png',
        projectName: 'Robolink Docs',
        date: '2023년 5월 ~ ing',
        languages: ['HTML', 'JavaScript', 'CSS'],
        link1: 'https://docs.robolink.com/',
        link2: '',
        contribution: ['Meta Docusaurus 기반의 문서 웹 Front-end UI/UX 개발', '프로젝트의 전체 구조 설계부터 개발까지 주도적으로 수행 및 지속적인 Release 관리 담당', '제품 문서에 따른 Breadcrumb 표시, ToC 하이라이팅 등 부가적인 기능 개발'],
        hideLink1: false,
        buttonText1: '웹사이트',
        hideLink2: true,
        buttonText2: ''
    },
    {
        imageUrl: 'scoreboard_project.png',
        projectName: 'Robolink Scoreboard',
        date: '2024년 2월',
        languages: ['Spring Boot', 'HTML', 'JavaScript', 'CSS'],
        link1: '',
        link2: '',
        contribution: ['Spring Boot 기반의 점수판 Full Stack 개발', '상위권 점수 하이라이팅 기능 구현', '모든 참여자의 점수를 스크롤링 방식으로 지속적으로 표시하도록 구현','관리자 페이지에서 점수 추가, 수정, 삭제 기능 구현'],
        hideLink1: true,
        buttonText1: '',
        hideLink2: true,
        buttonText2: ''
    },
    {
        imageUrl: 'JNI_project.png',
        projectName: 'JNIwiz: JNI header file automatic generation program that prevents C/C++ code call errors through static analysis of JAVA code',
        date: '2022년 7월 ~ 2023년 5월',
        languages: ['CPlusPlus', 'Java'],
        link1: 'https://github.com/green-study/JNIwiz',
        link2: 'https://www.youtube.com/watch?v=5UxNxQATbB4',
        contribution: ['Java와 C/C++ 간의 상호작용 오류를 감지하는 JNI Header 파일 자동 제작 연구','정적 분석을 통해 프로그램에 맟줘 JNI header 파일을 자동 제작하도록 구현', 'JNI header 파일이 Java와 C/C++ 간의 전송 정보 오류를 감지하도록 지원', 'LLVM 및 WALA와 같은 정적 분석 도구를 활용'],
        hideLink1: false,
        buttonText1: '소스코드',
        hideLink2: false,
        buttonText2: '동영상'
    },
    {
        imageUrl: 'IoT_project.png',
        projectName: 'Dog Bowel Pad Training IoT by Automatic Snack Feeder and Owner’s Voice Compliment Speaker for Human Convenience',
        date: '2022년 12월 ~ 2023년 2월',
        languages: ['RaspberryPi', 'CPlusPlus', 'Python'],
        link1: 'https://www.youtube.com/watch?v=o8msyWNerZ0',
        link2: '',
        contribution: ['반려견의 배변훈련을 돕는 IoT 제품 개발','무게 센서와 열화상 카메라를 통해 배변 활동을 감지하는 배변패드 제작', 'Raspberry Pi 4와 ESP32 간 Bluetooth 통신을 활용', 'ThingsBoard를 활용하여 사용자가 반려견의 배변 활동을 확인할 수 있는 IoT 기능 구현', '팀의 리더로 프로젝트 제작 및 논문 작성까지 전체적인 과정을 주도'],
        hideLink1: false,
        buttonText1: '동영상',
        hideLink2: true,
        buttonText2: ''
    },
    {
        imageUrl: 'disabled.png',
        projectName: '장애인 웹 접근성 체험 웹',
        date: '2022년 11월 ~ 2022년 12월',
        languages: ['HTML', 'JavaScript', 'CSS', 'Firebase'],
        link1: 'https://github.com/solitarySALMON/SALMON',
        link2: '',
        contribution: ['운동능력 장애, 저시력 장애의 웹 접근성 체험 페이지 구현', '로그인, 회원가입 및 체험 후기 기능을 firebase와 연동하여 구현', '팀 리더로 프로젝트 파트 분배 및 검수까지 전체적인 과정을 주도'],
        hideLink1: false,
        buttonText1: '소스코드',
        hideLink2: true,
        buttonText2: ''
    },
    {
        imageUrl: 'reink_project.png',
        projectName: 'Re:ink',
        date: '2022년 1월',
        languages: ['Flutter', 'Dart'],
        link1: 'https://www.youtube.com/watch?v=V4V0-kYJyqc',
        link2: 'https://www.youtube.com/shorts/njPEdspnEU8',
        contribution: ['편지를 타임머신에 저장하여 나무를 키우는 Re:ink 앱 개발','Flutter를 사용하여 앱의 Front-end UI/UX 개발을 설계하고 구현','사용자 반응 테스트 및 Android Studio를 통한 디버깅으로 문제를 해결', '팀의 리더로 프로젝트를 이끌며 9개의 팀 중 1등상을 수상'],
        hideLink1: false,
        buttonText1: '동영상 1',
        hideLink2: false,
        buttonText2: '동영상 2'
    },
    {
        imageUrl: 'crawler.png',
        projectName: 'Crawler Dataton: 코로나가 취미생활, 음식소비에 미친 영향 분석',
        date: '2020년 12월',
        languages: ['Python'],
        link1: 'https://www.youtube.com/watch?v=RxJBiaD8EzU',
        link2: '',
        contribution: ['코로나가 취미생활, 음식소비에 미친 영향에 대해 웹 크롤링 데이터 분석','인스타그램 해시태크, 네이버 실시간 검색어 웹 크롤링 데이터와 네이버 데이터랩 정보 분석','Pandas와 Matplotlib을 통해 분석 결과 시각화', '저학년 부분 1등상을 수상'],
        hideLink1: false,
        buttonText1: '동영상',
        hideLink2: true,
        buttonText2: ''
    }
];

const pc_projects = [
    {
        imageUrl: 'Ieee.png',
        projectName: 'Dog Bowel Pad Training IoT by Automatic Snack Feeder and Owner’s Voice Compliment Speaker for Human Convenience',
        date: '2023년 10월',
        languages: ['RaspberryPi', 'CPlusPlus', 'Python'],
        link1: 'https://ieeexplore.ieee.org/document/10393480/',
        link2: '',
        contribution: ['IEEE 논문 출판'],
        hideLink1: false,
        buttonText1: '논문',
        hideLink2: true,
        buttonText2: ''
    },
    {
        imageUrl: 'sqld.png',
        projectName: 'SQLD',
        date: '2022년 6월',
        languages: ['Oracle'],
        link1: '',
        link2: '',
        contribution: ['SQLD 자격증 (한국데이터산업진흥원)'],
        hideLink1: true,
        buttonText1: '',
        hideLink2: true,
        buttonText2: ''
    }
];

const cer_projects = [
    {
        imageUrl: 'udemy.png',
        projectName: 'Introduction to Computer Networks for Non-Techies',
        date: '2022년 9월',
        languages: [],
        link1: 'https://www.udemy.com/certificate/UC-177ce30f-10db-410c-a37f-e96a05938645/',
        link2: '',
        contribution: ['Udemy 수료증'],
        hideLink1: false,
        buttonText1: '수료증',
        hideLink2: true,
        buttonText2: ''
    },
    {
        imageUrl: 'udemy.png',
        projectName: 'Advanced C Programming: Pointers',
        date: '2022년 7월',
        languages: [],
        link1: 'https://www.udemy.com/certificate/UC-1de1cc56-3d40-4469-a21f-0130ec84fe41/',
        link2: '',
        contribution: ['Udemy 수료증'],
        hideLink1: false,
        buttonText1: '수료증',
        hideLink2: true,
        buttonText2: ''
    },
    {
        imageUrl: 'udemy.png',
        projectName: 'NLP - Natural Language Processing with Python',
        date: '2022년 7월',
        languages: [],
        link1: 'https://www.udemy.com/certificate/UC-264a022e-d2e1-4603-b071-9e6d31281615/',
        link2: '',
        contribution: ['Udemy 수료증'],
        hideLink1: false,
        buttonText1: '수료증',
        hideLink2: true,
        buttonText2: ''
    }
];

const Content = (): ReactElement => {
    return (
        <div className="content">
            <div className="profile-field">
                <Profile />
            </div>
            <div className="publications-certifications-field">
                <div className="field-title">
                    <p>논문 및 자격증</p>
                </div>
                <ProjectList projects={pc_projects} />
            </div>
            <div className="project-field">
                <div className="field-title">
                    <p>프로젝트 목록</p>
                </div>
                <ProjectList projects={projects} />
            </div>
            <div className="cer-field">
                <div className="field-title">
                    <p>수료증 목록</p>
                </div>
                <ProjectList projects={cer_projects} />
            </div>
            <div className="footer">
            </div>
        </div>
    );
};

export default Content;