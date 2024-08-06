// SPDX-License-Identifier: AGPL-3.0-only

// Code generated by applyconfiguration-gen. DO NOT EDIT.

package v0alpha1

// SavedViewSpecApplyConfiguration represents an declarative configuration of the SavedViewSpec type for use
// with apply.
type SavedViewSpecApplyConfiguration struct {
	Name        *string `json:"name,omitempty"`
	URL         *string `json:"url,omitempty"`
	Description *string `json:"description,omitempty"`
	Icon        *string `json:"icon,omitempty"`
	Meta        *string `json:"meta,omitempty"`
}

// SavedViewSpecApplyConfiguration constructs an declarative configuration of the SavedViewSpec type for use with
// apply.
func SavedViewSpec() *SavedViewSpecApplyConfiguration {
	return &SavedViewSpecApplyConfiguration{}
}

// WithName sets the Name field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the Name field is set to the value of the last call.
func (b *SavedViewSpecApplyConfiguration) WithName(value string) *SavedViewSpecApplyConfiguration {
	b.Name = &value
	return b
}

// WithURL sets the URL field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the URL field is set to the value of the last call.
func (b *SavedViewSpecApplyConfiguration) WithURL(value string) *SavedViewSpecApplyConfiguration {
	b.URL = &value
	return b
}

// WithDescription sets the Description field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the Description field is set to the value of the last call.
func (b *SavedViewSpecApplyConfiguration) WithDescription(value string) *SavedViewSpecApplyConfiguration {
	b.Description = &value
	return b
}

// WithIcon sets the Icon field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the Icon field is set to the value of the last call.
func (b *SavedViewSpecApplyConfiguration) WithIcon(value string) *SavedViewSpecApplyConfiguration {
	b.Icon = &value
	return b
}

// WithMeta sets the Meta field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the Meta field is set to the value of the last call.
func (b *SavedViewSpecApplyConfiguration) WithMeta(value string) *SavedViewSpecApplyConfiguration {
	b.Meta = &value
	return b
}
