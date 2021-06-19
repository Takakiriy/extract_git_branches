# extract_git_branches
<!-- Character Encoding: "WHITE SQUARE" U+25A1 is □. -->

`.git` フォルダーを元にブランチごとにフォルダーを作り、それぞれのフォルダーでチェックアウトします。

<!-- TOC depthFrom:1 -->

- [extract_git_branches](#extract_git_branches)
  - [使い方](#使い方)
  - [インストール](#インストール)
    - [Windows の場合](#windows-の場合)
    - [mac の場合](#mac-の場合)
  - [（開発者用） 開発環境の構築手順](#開発者用-開発環境の構築手順)
    - [Windows の場合](#windows-の場合-1)
    - [mac の場合](#mac-の場合-1)
  - [（開発者用） テスト](#開発者用-テスト)
    - [Jest を使うテスト](#jest-を使うテスト)
    - [Jest を使わないテスト](#jest-を使わないテスト)

<!-- /TOC -->


## 使い方

    extract_git_branches  __DotGitFolderPath__


## インストール

extract_git_branches を使うには Node.js のインストールが必要です。

### Windows の場合

    Node.js をインストールします:
        - https://nodejs.org/ja/download/ >> Windows Installer (.msi) >> 64-bit
        - ダウンロードしたファイル（例：node-v14.16.0-x64.exe）を開きます
        - インストール オプションはデフォルトを使用

    社内など、プロキシがある LAN に Windows がある場合:
        Windows スタート >> PowerShell（と入力）:
            npm config -g set proxy "http://___.___.___.___:____"
            npm config -g set https-proxy "http://___.___.___.___:____"

    extract_git_branches をダウンロードして展開し、extract_git_branches が使う Node.js パッケージをインストールします:
        Windows スタート >> PowerShell（と入力）:
            cd  ${env:USERPROFILE}\Downloads
            Invoke-WebRequest  https://github.com/Takakiriy/extract_git_branches/archive/refs/heads/master.zip -OutFile extract_git_branches.zip
            rm -r -fo  "extract_git_branches-master"  #// 更新するとき
            Expand-Archive -Path extract_git_branches.zip -DestinationPath "."
            cd  "extract_git_branches-master"

            npm install --only=production

    PowerShell を使う場合:
        PowerShell の PATH が通ったフォルダーに extract_git_branches を起動する PS1 スクリプト ファイル を作ります:
            Windows スタート >> PowerShell（と入力） :
                cd  ${env:USERPROFILE}\Downloads\extract_git_branches-master
                ${current_folder} = Convert-Path "."
                ${extract_git_branches_folder} = "${env:USERPROFILE}\Documents\extract_git_branches"
                ${script} = "${env:USERPROFILE}\AppData\Local\Microsoft\WindowsApps\extract_git_branches.ps1"

                echo  "`${env:NODE_PATH} = `"${current_folder}\node_modules`"" > ${script}
                echo  "node  ${current_folder}\build\extract_git_branches.js `$PsBoundParameters.Values `$args" >> ${script}

                Set-ExecutionPolicy  RemoteSigned  -Scope CurrentUser  #// スクリプトを実行できるようにします

    Git bash を使う場合:
        Git for Windows をインストールします:
            - https://git-scm.com/ >> Downloads >> Windows
            - ダウンロードしたファイル（例：Git-2.31.1-64-bit.exe）を開く
            - Next を8回押す
            - Configuring the line ending conversions: Checkout as-is, commit as-is
            - 他のインストール オプションはデフォルトを使用
        PATH が通ったフォルダーに extract_git_branches を起動する bash スクリプト ファイル を作ります:
            フォルダーを右クリック >> Git bash :
                cd  ${HOME}/Downloads/extract_git_branches-master
                current_folder="$(pwd)"
                extract_git_branches_folder="${HOME}/Documents/extract_git_branches"
                script="${HOME}/bin/extract_git_branches"
                mkdir -p "${HOME}/bin"

                echo  "export NODE_PATH=\"${HOME}/AppData/Roaming/npm/node_modules\"" > ${script}
                echo  "node  ${current_folder}/build/extract_git_branches.js \"\$@\"" >> ${script}

    extract_git_branches が使えることを確認します:
        PowerShell または Git bash を新しく開いて:
            extract_git_branches --version

### mac の場合

    Node.js をインストールします:
        - https://nodejs.org/ja/download/ >> macOS Installer (.pkg) >> 64-bit
        - ダウンロードしたファイル（例：node-v14.16.0.pkg）を開きます
        - インストール オプションはデフォルトを使用

    extract_git_branches をダウンロードして展開し、extract_git_branches が使う Node.js パッケージをインストールします:
        #// Launchpad >> Terminal
        cd  ~/Downloads
        setopt interactivecomments
            #// enables comment symbol (#)
        curl -o extract_git_branches.zip -kL https://github.com/Takakiriy/extract_git_branches/archive/refs/heads/master.zip 
        rm -rf  extract_git_branches-old  &&  mv  extract_git_branches  extract_git_branches-old  #// 更新するとき
        unzip -o extract_git_branches.zip
        mv  extract_git_branches-master  extract_git_branches  #// Zip ファイルを展開したフォルダー
        cd  extract_git_branches

        npm install --only=production

    PATH が通ったフォルダーに extract_git_branches を起動する スクリプト ファイル を作ります:
        cd extract_git_branches  #// Zip ファイルを展開したフォルダー
        script="$HOME/bin/extract_git_branches"
        rm -f "${script}"  #// 更新するとき
        echo "export  NODE_PATH=$(pwd)/node_modules" >> "${script}"
        echo "node  $(pwd)/build/extract_git_branches.js \"\$@\"" >> "${script}"
        chmod +x "${script}"
        unset script

    extract_git_branches が使えることを確認します:
        extract_git_branches --version


## （開発者用） 開発環境の構築手順

### Windows の場合

Node.js をインストールします:

    - https://nodejs.org/ja/download/ >> Windows Installer (.msi) >> 64-bit
    - ダウンロードしたファイル（例：node-v14.16.0-x64.exe）を開きます
    - インストール オプションはデフォルトを使用

Git for Windows をインストールします:

    - https://git-scm.com/ >> Downloads >> Windows
    - ダウンロードしたファイル（例：Git-2.31.1-64-bit.exe）を開く
    - Next を8回押す
    - Configuring the line ending conversions: Checkout as-is, commit as-is
    - 他のインストール オプションはデフォルトを使用

Visual Studio Code をインストールします:

    - https://code.visualstudio.com/
    - ダウンロードしたファイル（例：VSCodeUserSetup-x64-1.54.3.exe）を開きます
    - インストール オプションはデフォルトを使用
    - VSCode >> Terminal >> New Terminal
    - 開いたシェルの右上に 1:powershell が表示されていたら、そこをクリックして Select Default Shell >> Git bash
    - （推奨）Visual Studio Code をタスクバーにピン止めします:
    - （推奨）Ctrl + S キーを押したときに全てのファイルを保存するように設定します: |
        File >> Preferences >> Keyboard Shortcuts >> save all （と入力） >>
            File: Save All （をダブルクリック） >> Ctrl + S キー >> Enter キー
    - Visual Studio Code を閉じます

`cmd menu.bat` をダブルクリックして、`1. open_VisualStudioCode` を選びます:

F5 キーを押すと、最初のテストが動きます:


### mac の場合

Node.js をインストールします:

    - https://nodejs.org/ja/download/ >> macOS Installer (.pkg)
    - ダウンロードしたファイル（例：node-v14.16.0.pkg）を開きます
    - インストール オプションはデフォルトを使用

Visual Studio Code をインストールします:

    - https://code.visualstudio.com/
    - ダウンロードしたファイル（例：Visual Studio Code.app）をダブルクリックします
    - （推奨）Visual Studio Code を Dock に移動します:
    - （推奨）Ctrl + S キーを押したときに全てのファイルを保存するように設定します: |
        Code >> Preferences >> Keyboard Shortcuts >> save all （と入力） >>
            File: Save All （をダブルクリック） >> Command + S キー >> Enter キー
    - Visual Studio Code を閉じます

`cmd menu.command` ファイルに実行権限を追加します:

    - `bin/chmod+x.command.zip` ファイルをダブルクリックします
    - 解凍してできた `chmod+x.command` ファイルを右クリック >> 開く >> 開く
    - `cmd menu.command` ファイルを開いたウィンドウにドラッグ＆ドロップして、Enter キーを押し、ウィンドウを閉じます
    - `cmd menu.command` ファイルを右クリック >> 開く >> 開く
    - 開いたウィンドウを閉じます

`cmd menu.command` ファイルをダブルクリックして、`1. open_VisualStudioCode` を選びます:

fn + F5 キーを押すと、最初のテストが動きます:


## （開発者用） テスト

Jest を使うテストと Jest を使わないテストがあります。
ソース ファイルの行番号の左をクリックして、ブレークポイントを設定できます。

### Jest を使うテスト

- Visual Studio Code >> Terminal >> New Terminal >>（＋の左の 1:__shell__）>> Create JavaScript Debug Terminal
- npm test
- テストを再起動します:
    - Continue ボタン:  #// 最後まで実行します
    - npm test が動いている Terminal で f キーを押します
- （終了するときは）Terminal タブ（下）>> ゴミ箱アイコン（右）

### Jest を使わないテスト

- Visual Studio Code >> F5 キー
