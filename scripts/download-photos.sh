#!/usr/bin/env bash
set -euo pipefail

DEST="$(cd "$(dirname "$0")/.." && pwd)/public/images/photos"
mkdir -p "$DEST"

urls=(
"https://scontent-phx1-1.xx.fbcdn.net/v/t39.84726-6/626317479_2451835255276252_2946483251880717406_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=92e707&_nc_ohc=S14jVvx5SFIQ7kNvwGRp09b&_nc_oc=AdoBvSJpmde_uFgN8cNj5-jovW6UIg-XgHeaGgxv6oQc3hGAJ7FvXaVu6iXpgUePRmE&_nc_zt=14&_nc_ht=scontent-phx1-1.xx&_nc_gid=WIh1tlbAO2FFGKDDwRD3Ww&oh=00_Af2nNmuqEdfzhJOPQsVwG-aAPO4UCBxKQ6tT06bjzK4IMg&oe=69F0607B"
"https://scontent-phx1-1.xx.fbcdn.net/v/t45.5328-4/627748007_1690265515716304_6194683115025254323_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=dvqSU4zIesUQ7kNvwGeNUY_&_nc_oc=AdpwdN3RVgkaiEFXu3XXeaKVSXrmxoAvZOs4pdJh5ABYYY6kRWUXNe9tBgCcv5gJeDY&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=WIh1tlbAO2FFGKDDwRD3Ww&oh=00_Af3C0mk3dfxyLTdI5GXMre9_83HUTjETg4XibQlobLp8qQ&oe=69F05561"
"https://scontent-phx1-1.xx.fbcdn.net/v/t39.84726-6/654697381_1948124979424293_3703836089205519188_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=111&ccb=1-7&_nc_sid=92e707&_nc_ohc=rryLOGsmyycQ7kNvwGWyA5Z&_nc_oc=AdrQNpCRs0t2Q-KTIfTR51XrykHAp2UiZOjM81tk_vYRbTGAPXYkm652K_qM8KhII5k&_nc_zt=14&_nc_ht=scontent-phx1-1.xx&_nc_gid=kfx4VxkmR4MRX0HoyCgjCw&oh=00_Af1yRGjl_ZF2K3bauRoQgFUwYvXSPZiNTYWRF2TW640lZg&oe=69F04D2E"
"https://scontent-phx1-1.xx.fbcdn.net/v/t45.5328-4/654540441_1230105738846095_3658936685004724621_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=mfRr66PQQ9MQ7kNvwEIzvEe&_nc_oc=Adrw58XHNdATs_ymfOZxHeInU6h208iGJvD9qAET_Rit_DV48eVk4L7b8l6_3OBRaZY&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=kfx4VxkmR4MRX0HoyCgjCw&oh=00_Af32Rp2uE0eAM4US01LVjMbqqg36sVP0P5eet8wjP1zhHw&oe=69F0568F"
"https://scontent-phx1-1.xx.fbcdn.net/v/t45.5328-4/655074023_2009904443073222_3224384994806127859_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=CAiuy9hD3hsQ7kNvwEBDq_7&_nc_oc=AdpAEON8D0Gl6qMpPO1e2W6ky8r9MUxfCJGcJxflJhl52b5MlKA0wMOPzShsNcZrxwE&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=kfx4VxkmR4MRX0HoyCgjCw&oh=00_Af19RsxUduQn_oZY1G4tzxHPQMJu3474klRblVItsGnsZw&oe=69F0593C"
"https://scontent-phx1-1.xx.fbcdn.net/v/t45.5328-4/656640671_1641428853725081_1235236634695785396_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=pynQGKeTVHIQ7kNvwEhRXkd&_nc_oc=AdplH8pwizovOKhpFK6Rg20_XMysszk9OndTEdldBbLBcFLbT05RsbBL2byy-bsOnXk&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=kfx4VxkmR4MRX0HoyCgjCw&oh=00_Af2Bnzh0fcpKHxiBWjCTd0DD3Z9j27hrhJ1HYu2nPFmtsA&oe=69F055B6"
"https://scontent-phx1-1.xx.fbcdn.net/v/t39.84726-6/650194401_1979299842960963_8148922282174485891_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=92e707&_nc_ohc=eTrwRRCFzK0Q7kNvwF67Sto&_nc_oc=AdqUp12wYQiRceSK8BQeX5l-ZfkM_OvWtVqsYHDQz-asAhuARHd0a4Rr0Tgev7XhLnw&_nc_zt=14&_nc_ht=scontent-phx1-1.xx&_nc_gid=BRCoXBNmP0XhQIaKiVNYWw&oh=00_Af32Qm1MVg5opybkTvXYJmwR0IGcwSuw7zIZKxRbDJSLQg&oe=69F05C24"
"https://scontent-phx1-1.xx.fbcdn.net/v/t45.5328-4/649647668_923154697233424_2582265469087890357_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=qTXPzkYHWboQ7kNvwGnLo4E&_nc_oc=AdrQcTmk52_G0bhFQwduPFX-Xrxsx_CEgrDM1kucqMPGs_V8nB07TQ14c4O9tIKOiJE&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=BRCoXBNmP0XhQIaKiVNYWw&oh=00_Af2D6vmK9eR1zMSmcJT7PwFIsRhfVH57HNOOx37gUL6GMQ&oe=69F0335E"
"https://scontent-phx1-1.xx.fbcdn.net/v/t45.5328-4/649851259_1463001631863594_881042560056147019_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=pyOujAAWvmsQ7kNvwExzH0s&_nc_oc=AdpTafR_z9sNADjnXjXhOmn4C3j3AO7oZEQwW4cpWmOD1n7v1uqUypoCKZO7EBULewQ&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=BRCoXBNmP0XhQIaKiVNYWw&oh=00_Af2kkGem7c-BkBUjH388-QM9TkmM-A-sZS-7_xkcfrOEzA&oe=69F032A0"
"https://scontent-phx1-1.xx.fbcdn.net/v/t45.5328-4/649751458_34304740145807853_8590846106718417914_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=Jm-5NtaOCFEQ7kNvwFIMiPB&_nc_oc=AdpX-DllmC0ICgmIxqqJbmr5AesRtmKW8CHAm1B5YmLJZ5nDCrdltjLlYEL6AUos3rc&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=BRCoXBNmP0XhQIaKiVNYWw&oh=00_Af00oxAJj5En0SzK8Pta-GQuU8ZVc4zxh12ynCLgEEy9YQ&oe=69F03809"
"https://scontent-phx1-1.xx.fbcdn.net/v/t39.84726-6/622000438_25740583125580518_2786238364508866471_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=92e707&_nc_ohc=pe7gNmjHI5wQ7kNvwE_AbBa&_nc_oc=AdpC8WHcQMlvKIxpGxBfVNCHI6ilIjo6jsBEQJyI2TWvb0AtpUp4Q2lFXs11ihkJ3qw&_nc_zt=14&_nc_ht=scontent-phx1-1.xx&_nc_gid=YybK7HGkV04k-D-rjGObSA&oh=00_Af2NiAeyUTu9K5u6UUdboyZDvncX-oNzn1EsJKTsBOB_vA&oe=69F04753"
"https://scontent-phx1-1.xx.fbcdn.net/v/t45.5328-4/625030009_1436746694822334_676668417714487109_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=nRKUKLMERMEQ7kNvwEyb-_J&_nc_oc=AdqVnC-5dtwopHHWU0-a-bDwGUNfzYAVPkDasmi0Np5sKwDwUgBP3pY8i2lZXcojkco&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=YybK7HGkV04k-D-rjGObSA&oh=00_Af3LwCNxAgefdWW2r2ZeGEMMcAW3xNefDFFO-ahsDt-x8A&oe=69F04899"
"https://scontent-phx1-1.xx.fbcdn.net/v/t45.5328-4/624087284_4147405585512379_8485890504302252566_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=6A2hlfwa8pwQ7kNvwFFx-W0&_nc_oc=Adpagj7lOY5daAjaYkLQWTmN1s-rp78k-brZNquzEAHMA2h5rHwtly8OXKiJR9zNUWw&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=YybK7HGkV04k-D-rjGObSA&oh=00_Af3YuQfHjJG6Yo_7lADh08k1oQRYtWMn_-zkI62o8VJlGQ&oe=69F02AAD"
"https://scontent-phx1-1.xx.fbcdn.net/v/t39.84726-6/627785988_1596758751581980_6772544552944896745_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=92e707&_nc_ohc=6hJtlDTPebUQ7kNvwF6zf69&_nc_oc=AdocDAVKOqA0T1dxNjMJlyAPfLy9HfTtLPDRJ9dZvkBj-ww7ELqL09ZP64PfVvSOcxE&_nc_zt=14&_nc_ht=scontent-phx1-1.xx&_nc_gid=zORhIUc7o4aClDKC0w_PcA&oh=00_Af1OAQ7uzYO7sRHwagzYhp9_eAv5R5H5KFX8rBjrY1QBfw&oe=69F03FAD"
"https://scontent-phx1-1.xx.fbcdn.net/v/t45.5328-4/630849792_1424532296073043_7109074912364134906_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=EEZYfLPkrtkQ7kNvwFiNg0V&_nc_oc=AdrwvoD2-ZjxKuU_Bpp8xJ8GhntTqbbS_QqBMS_7FHC5eH6Dw2caAzGYzOmcd2kmWdY&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=zORhIUc7o4aClDKC0w_PcA&oh=00_Af2CUg-1RrOGq75NoaViO_4QxIBfjjGrPBjilIlI-oHv7Q&oe=69F02F89"
"https://scontent-phx1-1.xx.fbcdn.net/v/t39.84726-6/630545187_2393527074420626_5391948405799528643_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=92e707&_nc_ohc=QORfcIcNai8Q7kNvwF_44Ho&_nc_oc=AdqGIBP4v2OnpCGygX2dLGIPb3QRkKMgvRgQ8ZPQdeI46IZ4vIgONU5TpSt2dYiENS4&_nc_zt=14&_nc_ht=scontent-phx1-1.xx&_nc_gid=UW82bD2jNzU_o28as3Ftkw&oh=00_Af0wIBqJO7qF24tuq1qaL5yQE-4oL0_8d_N6NFVhbIDxSg&oe=69F054A7"
"https://scontent-phx1-1.xx.fbcdn.net/v/t39.84726-6/631013176_1127288696076945_3534673722493968511_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=102&ccb=1-7&_nc_sid=92e707&_nc_ohc=gzgRadO2kf0Q7kNvwExDec5&_nc_oc=AdrWpOvFAoyXBrhZCmt9BX7CP4c2ZCzXKcMRk92k7Whjd8JgFN-P_gEv5e8h9EB6h4o&_nc_zt=14&_nc_ht=scontent-phx1-1.xx&_nc_gid=2uBClx57xPj0f-eGh9eZDA&oh=00_Af2Q3JEncQs6FgSFpZFiiWITvJm763ocGESWTA1KeDNtXg&oe=69F057EC"
)

i=1
for url in "${urls[@]}"; do
  n=$(printf "%02d" "$i")
  out="$DEST/photo-$n.jpg"
  echo "Downloading $n..."
  curl -sSL \
    -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36" \
    -H "Accept: image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8" \
    -H "Referer: https://www.facebook.com/" \
    -o "$out" "$url"
  size=$(wc -c < "$out")
  echo "  $n -> $size bytes"
  i=$((i+1))
done

echo "Done. Files in $DEST:"
ls -la "$DEST"
