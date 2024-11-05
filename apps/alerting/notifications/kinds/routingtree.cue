package core

route: {
	kind:  "RoutingTree"
	group: "notifications"
	apiResource: {
		groupOverride: "notifications.alerting.grafana.app"
	}
	codegen: {
		frontend: false
		backend:  true
	}
	pluralName: "RoutingTrees"
	current:    "v0alpha1"
	versions: {
		"v0alpha1": {
			schema: {
				_groupSettings : {
					group_by?: [...string]
					group_wait?: string
					group_interval?:  string
					repeat_interval?: string
				}
				#RouteDefaults: close({
					_groupSettings
					receiver: string
				})
				#Matcher: {
					 type: "=" |"!="|"=~"|"!~" @cuetsy(kind="enum")
					 label: string
					 value: string
				}
				#Route: close({
					_groupSettings
					receiver?: string
					matchers?: [...#Matcher]
					continue: bool
					mute_time_intervals?: [...string]
				})
				#Route1: close({
					#Route
					routes?: [...#Route2]
				})
				#Route2: close({
					#Route
					routes?: [...#Route3]
				})
				#Route3: close({
					#Route
					routes?: [...#Route4]
				})
				#Route4: close({
					#Route
					routes?: [...#Route5]
				})
				#Route5: close({
					#Route
					routes?: [...#Route6]
				})
				#Route6: close({
					#Route
					routes?: [...#Route]
				})
				spec: {
					 defaults: #RouteDefaults
					 routes: [...#Route1]
				}
			}
		}
	}
}