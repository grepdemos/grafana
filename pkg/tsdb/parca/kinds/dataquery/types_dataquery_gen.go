// Code generated - EDITING IS FUTILE. DO NOT EDIT.
//
// Generated by:
//     public/app/plugins/gen.go
// Using jennies:
//     PluginGoTypesJenny
//
// Run 'make gen-cue' from repository root to regenerate.

package dataquery

// Defines values for ParcaQueryType.
const (
	ParcaQueryTypeBoth    ParcaQueryType = "both"
	ParcaQueryTypeMetrics ParcaQueryType = "metrics"
	ParcaQueryTypeProfile ParcaQueryType = "profile"
)

// ParcaDataQuery defines model for ParcaDataQuery.
type ParcaDataQuery struct {
	// For mixed data sources the selected datasource is on the query level.
	// For non mixed scenarios this is undefined.
	// TODO find a better way to do this ^ that's friendly to schema
	// TODO this shouldn't be unknown but DataSourceRef | null
	Datasource *interface{} `json:"datasource,omitempty"`

	// Hide true if query is disabled (ie should not be returned to the dashboard)
	// Note this does not always imply that the query should not be executed since
	// the results from a hidden query may be used as the input to other queries (SSE etc)
	Hide *bool `json:"hide,omitempty"`

	// Specifies the query label selectors.
	LabelSelector string `json:"labelSelector"`

	// Specifies the type of profile to query.
	ProfileTypeId string `json:"profileTypeId"`

	// Specify the query flavor
	// TODO make this required and give it a default
	QueryType *string `json:"queryType,omitempty"`

	// A unique identifier for the query within the list of targets.
	// In server side expressions, the refId is used as a variable name to identify results.
	// By default, the UI will assign A->Z; however setting meaningful names may be useful.
	RefId string `json:"refId"`
}

// ParcaQueryType defines model for ParcaQueryType.
type ParcaQueryType string
