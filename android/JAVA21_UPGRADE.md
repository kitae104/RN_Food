# Java 21 업그레이드 안내 (한국어)

이 문서는 Android 하위 프로젝트에서 Java 런타임을 LTS 최신 버전인 Java 21로 올리는 방법을 안내합니다.

자동화 도구(예: Copilot의 JDK 설치 및 업그레이드 도구)가 현재 사용 불가하여 수동으로 진행해야 합니다. 아래 단계를 따라 진행하세요.

1) JDK 21 설치 (Windows)
   - 권장: Eclipse Temurin (Adoptium) 혹은 Microsoft Build of OpenJDK
   - winget 사용 (Windows 10/11):
     winget install -e --id Eclipse.Adoptium.Temurin.21
   - Chocolatey 사용:
     choco install temurin21 -y
   - 수동 다운로드: https://adoptium.net/ 에서 Windows x64 MSI 또는 ZIP을 다운로드하여 설치

2) 환경 변수 설정 (cmd.exe)
   - 설치 경로 예: C:\\Program Files\\Eclipse Adoptium\\jdk-21.0.x
   - 영구 설정 (관리자 권한 권장):
     setx JAVA_HOME "C:\\Program Files\\Eclipse Adoptium\\jdk-21.0.x"
     setx PATH "%JAVA_HOME%\\bin;%PATH%"
   - 명령 프롬프트를 재시작한 후 확인:
     java -version

3) Gradle이 JDK21을 사용하도록 설정
   - 선택 A (권장, 시스템 전체 JAVA_HOME 사용): JAVA_HOME을 위에서 설정하면 Gradle이 자동으로 이를 사용합니다.
   - 선택 B (로컬로 Gradle에 명시): `android/gradle.properties`에 아래 항목을 추가(사용자 JDK 경로로 수정):
     org.gradle.java.home=C:\\Program Files\\Eclipse Adoptium\\jdk-21.0.x

4) Gradle wrapper 및 AGP(안드로이드 그레이들 플러그인) 호환성
   - 이 프로젝트의 Gradle wrapper는 `gradle-8.8`입니다. Gradle 8.8은 Java 21을 지원합니다.
   - 일부 오래된 Android Gradle Plugin(AGP)은 최신 JDK와 호환되지 않을 수 있으니, 빌드 실패 시 AGP 버전을 확인하고 업그레이드하세요.

5) 빌드 설정 업데이트 (선택 사항)
   - `android/app/build.gradle`의 `android { ... }` 블록에 Java 21을 지정할 수 있습니다. 아래 예제를 참고하세요.
   - 이 저장소에는 안전을 위해 주석 처리된 예제가 추가되어 있습니다. JDK 21 설치 후 주석을 제거해 사용하세요.

6) 빌드 및 검증
   - 커맨드 프롬프트에서 프로젝트 루트로 이동한 뒤:
     cd android
     gradlew.bat clean
     gradlew.bat assembleDebug
   - 에러가 발생하면 에러 로그(특히 "unsupported class file major version" 또는 AGP/Gradle 관련 메시지)를 확인하고 공유해 주세요.

7) 문제 발생 시 체크리스트
   - `java -version`으로 JDK 21이 활성화되어 있는지 확인
   - `gradlew.bat --version`으로 Gradle이 올바른 JVM을 사용 중인지 확인
   - Kotlin 코드를 컴파일할 때는 `kotlinOptions.jvmTarget` 설정을 확인하세요 (Kotlin/Gradle/Kotlin plugin 버전에 따라 jvmTarget 값의 지원 범위가 다를 수 있습니다)

추가 도움이 필요하면 JDK 설치 결과(예: `java -version` 출력)와 `gradlew.bat assembleDebug` 실행 로그를 붙여 주세요. 제가 다음 단계(Gradle/Kotlin 설정 적용, AGP 업그레이드 제안 등)를 직접 도와드리겠습니다.
