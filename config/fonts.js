module.exports = {
	formats: 'local woff2 woff',
	custom: {
		"Gotham Pro": {
			variants: {
				normal: {
					400: {
						url: {
							woff2: "../fonts/Reg/GothamPro.woff2",
							woff: "../fonts/Reg/GothamPro.woff"
						}
					},
					// 500: {
					// 	url: {
					// 		woff2: "../fonts/Bold/GothamPro-Bold.woff2",
					// 		woff: "../fonts/Bold/GothamPro-Bold.woff"
					// 	}
					// },
					700: {
						url: {
							woff2: "../fonts/Bold/GothamPro-Bold.woff2",
							woff: "../fonts/Bold/GothamPro-Bold.woff"
						}
					}
				}
			}
		}
	}
}